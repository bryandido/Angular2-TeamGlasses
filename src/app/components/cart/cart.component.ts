import { Component } from '@angular/core';
import { ArrayPipe } from '../../pipes/array.pipe';
import { ProductService } from '../../services/product/product.service';

@Component({
  moduleId: module.id,
  selector: 'cart',
  templateUrl: 'cart.component.html',
})
export class CartComponent  {
  posts:any;
  storage:string;
  constructor(private _productService: ProductService){
    this._productService.getById(Number(sessionStorage.getItem('Cart'))).subscribe(posts => {
      console.log(posts);
      this.posts = posts;
    });
}
}
