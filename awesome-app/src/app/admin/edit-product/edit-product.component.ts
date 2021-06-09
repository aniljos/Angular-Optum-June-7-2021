import { Component, OnInit, Input, 
        OnChanges, OnDestroy, SimpleChanges, EventEmitter, Output } from '@angular/core';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit, OnChanges, OnDestroy {

  @Input()
  public product: Product = null;
  @Output()
  public saved: EventEmitter<Product> = new EventEmitter<Product>();
  @Output()
  public cancelled: EventEmitter<string> = new EventEmitter<string>();

  public current: Product;


  constructor() { 
    console.log("EditProductComponent constructor");
  }
  

  ngOnInit(): void {

    console.log("EditProductComponent ngOnInit");
  }

  ngOnChanges(changes: SimpleChanges): void {
    
    console.log("EditProductComponent ngOnChanges: ", changes);
    this.current = new Product();
    Object.assign(this.current, this.product);
  }
  ngOnDestroy(): void {
    console.log("EditProductComponent ngOnDestroy");
  }

  save(){
      this.saved.emit(this.current);
  }

  cancel(){
    this.cancelled.emit("Operation cancelled");
  }

}
