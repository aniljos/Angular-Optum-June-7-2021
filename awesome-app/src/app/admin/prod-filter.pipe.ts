import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../model/product';

@Pipe({
  name: 'prodFilter'
})
export class ProdFilterPipe implements PipeTransform {

  // data | prodFilter : searchKey
  transform(input: Array<Product>, searchKey: string): Array<Product> {

    if(!searchKey){
      return input;
    }
    else{
      return input.filter(item => 
            item.id.toString() === searchKey 
              || item.name.toLowerCase().includes(searchKey.toLowerCase())
              || item.category.toLowerCase().includes(searchKey.toLowerCase())
              || item.price.toString() === searchKey)
    }
    //return null;
  
  }

}
