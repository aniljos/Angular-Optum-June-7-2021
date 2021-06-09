import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DatabindingComponent } from './databinding/databinding.component';
import {HelloComponent} from './hello/hello.component';
import {RouterModule, Routes} from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
//import { AdminModule } from './admin/admin.module';
import { GadgetStoreModule } from './gadget-store/gadget-store.module';
import { LoginComponent } from './login/login.component';
import { UserService } from './services/user-service';
import { UserServiceImpl } from './services/user-service-impl';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuardService } from './services/auth-guard.service';
import { SearchComponent } from './search/search.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { appReducer } from './ngrx/app-reducer';

// http://localhost:4200/
// http://localhost:4200/binding

// / http://abc.com/ngApp/home

const routes: Routes = [
  {path: "home", component: HelloComponent},
  {path: "binding", component: DatabindingComponent},
  {path: "login", component: LoginComponent},
  {path: "search", component: SearchComponent},
  {path: "products", loadChildren: () => import('./admin/admin.module').then(item => item.AdminModule), 
                                    canActivate: [AuthGuardService]},
  {path: "", redirectTo: "/home", pathMatch: "full"},
  {path: "**", component: NotFoundComponent}

];

@NgModule({
  declarations: [
    AppComponent, 
    HelloComponent,
    DatabindingComponent,
    NotFoundComponent,
    LoginComponent,
    SearchComponent
    
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
  // AdminModule,
    GadgetStoreModule,
    HttpClientModule,
    StoreModule.forRoot({appState: appReducer}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [{provide: UserService, useClass: UserServiceImpl}],
  bootstrap: [AppComponent]
})
export class AppModule { }
