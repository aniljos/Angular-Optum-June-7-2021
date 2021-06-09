import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from 'src/app/model/product';
import { AppState, CartItem } from 'src/app/ngrx/app-state';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.css']
})
export class ViewCartComponent implements OnInit {

  public cart: Array<CartItem>;
  constructor(private store: Store<{appState: AppState}>) { 

    store.subscribe((data) => {

      this.cart = data.appState.cart;
    });

  }

  ngOnInit(): void {
  }

  remove(product: Product){
      this.store.dispatch({type: "REMOVE_FROM_CART", data: product.id});
  }

}
