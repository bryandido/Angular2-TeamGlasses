import { Component } from '@angular/core';
import { ArrayPipe } from '../../pipes/array.pipe';
import { ProductService } from '../../services/product/product.service';
import { Router } from '@angular/router';

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
  constructor(private _productService: ProductService, private _router: Router) {
    this.cart = JSON.parse(sessionStorage.getItem('Cart'));
    for (var i = 0; i < this.cart.length; i++) {
      this._productService.getById(this.cart[i]).subscribe(posts => {
        this.posts.push(posts);
        this.total += posts.price;
        window.localStorage.setItem('total',String[this.total]);
      });

    }

  //  this._productService.create(this.product).subscribe();
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
  }
  check(){
    if (window.sessionStorage.getItem('userID')==null){
      alert('Please register or login.');
      this._router.navigateByUrl('/login');
    }
    else{
      this._router.navigateByUrl('/checkout');
    }
  }
}
