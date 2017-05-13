import { Component } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { ArrayPipe } from '../../pipes/array.pipe';
import { ProductService } from '../../services/product/product.service';

@Component({
  moduleId: module.id,
  selector: 'searchTv',
  templateUrl: 'searchTv.component.html',
})
export class SearchTvComponent  {
  post: any;
  posts:any;
  storage:string;
  cart: number[]=[];

  constructor(private _productService: ProductService){
    this._productService.getByType("TV").subscribe(posts => {
      this.posts = posts;
    });
    if (window.sessionStorage.getItem('Cart')!==null){
      this.cart=(JSON.parse(window.sessionStorage.getItem('Cart')));
    }
    console.log(this.cart);
  }

  store(id:string){
    this.cart.push(Number(id));
    window.sessionStorage.setItem('Cart',JSON.stringify(this.cart));
    this.storage = window.sessionStorage.getItem('Cart');
    alert("Added to Cart!");
  };

  selectPost(post: any): void {
    this.post =  post;
  }
}
