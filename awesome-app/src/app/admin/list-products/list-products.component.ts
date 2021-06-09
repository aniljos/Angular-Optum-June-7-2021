import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import {Product} from '../../model/product';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  private url: string;

  //public data: []
  public data: Array<Product> = new Array<Product>();
  public selectedProduct: Product = null;
  public searchKey: string;

  constructor(private httpClient: HttpClient) { 
    //this.url = "http://localhost:9000/products";
    this.url = environment.products;
  }

  ngOnInit(): void {

    this.fetch();
    
  }

  fetch(){
    this.httpClient
              .get<Array<Product>>(this.url)
              .subscribe((data) => {
                console.log("success: ", data);
                this.data = data;
              }, (err) => {
                console.log("error: ", err);
              })
  }

  delete(product: Product){

    this.httpClient
            .delete(this.url + "/" + product.id)
            .subscribe(() => {
              
              //alert("Deleted");
              this.fetch();


            }, () => {
              alert("Failed to delete");
            });

  }
  edit(product: Product){
    this.selectedProduct = product;
  }

  editUpdate(updatedProduct: Product){
    console.log("updatedProduct: ", updatedProduct);
    this.httpClient
            .put(this.url + "/" + updatedProduct.id, updatedProduct)
            .subscribe(() => {
              alert("updated");
              this.fetch()
              this.selectedProduct = null;
            }, () => {
              alert("Failed to update");
            })
  }

  editCancelled(message: string){
    console.log("message: ", message);
    this.selectedProduct = null;
  }

}
