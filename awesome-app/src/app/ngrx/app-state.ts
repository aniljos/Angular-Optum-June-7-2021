import { Product } from "../model/product"

export class CartItem{
    
    product: Product;
    quantity: number;

}

export class AppState{
    cart: Array<CartItem>
}