import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product';
import { CartItem } from 'src/app/ngrx/app-state';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent implements OnInit {

  public products: Observable<Array<Product>>
  constructor(private http: HttpClient, private store: Store) { }

  ngOnInit(): void {

     this.products 
          =  this.http.get<Array<Product>>(environment.products);
  }

  add(product: Product, quantity: string){
    this.store.dispatch({type: "ADD_TO_CART", payload: {product, quantity: parseInt(quantity)}});
  }

}
