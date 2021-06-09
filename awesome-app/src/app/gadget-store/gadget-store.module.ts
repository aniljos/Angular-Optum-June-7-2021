import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ViewCartComponent } from './view-cart/view-cart.component';
import { ViewProductsComponent } from './view-products/view-products.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {path: "store", component: HomeComponent, children: [

    {path: "viewproducts", component: ViewProductsComponent},
    {path: "viewcart", component: ViewCartComponent}

  ]},
  
]

@NgModule({
  declarations: [
    HomeComponent,
    ViewCartComponent,
    ViewProductsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule
  ]
})
export class GadgetStoreModule { }
