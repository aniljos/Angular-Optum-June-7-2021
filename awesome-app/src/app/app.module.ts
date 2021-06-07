import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DatabindingComponent } from './databinding/databinding.component';
import {HelloComponent} from './hello/hello.component';
import {RouterModule, Routes} from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

// http://localhost:4200/
// http://localhost:4200/binding

// / http://abc.com/ngApp/home

const routes: Routes = [
  {path: "home", component: HelloComponent},
  {path: "binding", component: DatabindingComponent},
  {path: "", redirectTo: "/home", pathMatch: "full"},
  {path: "**", component: NotFoundComponent}

];

@NgModule({
  declarations: [
    AppComponent, 
    HelloComponent,
    DatabindingComponent,
    NotFoundComponent
    
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
