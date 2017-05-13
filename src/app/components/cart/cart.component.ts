import { Component } from '@angular/core';
import { ArrayPipe } from '../../pipes/array.pipe';
import { ProductService } from '../../services/product/product.service';

@Component({
  moduleId: module.id,
  selector: 'cart',
  templateUrl: 'cart.component.html',
})
export class CartComponent {
  posts: Array<Object> = [];
  cart: number[];
  storage: string;
  total: number = 0;
  constructor(private _productService: ProductService) {
    this.cart = JSON.parse(sessionStorage.getItem('Cart'));
    for (var i = 0; i < this.cart.length; i++) {
      this._productService.getById(this.cart[i]).subscribe(posts => {
        this.posts.push(posts);
        this.total += posts.price;
      });

    }
  }
  remove(id: number) {
    for (var i = 0; i < this.cart.length; i++) {
      if (this.cart[i] == id) {
        this.cart.splice(i, 1);
        break;
      }
    }
    sessionStorage.setItem('Cart', JSON.stringify(this.cart));
    window.location.reload();
  };
}
