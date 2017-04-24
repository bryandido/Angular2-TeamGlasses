import { Component } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { ArrayPipe } from '../../pipes/array.pipe';
import { ProductService } from '../../services/product/product.service';

@Component({
  moduleId: module.id,
  selector: 'content',
  templateUrl: 'content.component.html',
})
export class ContentComponent  {
  posts:any;
  storage:string;
  constructor(private _productService: ProductService){
    this._productService.getAll().subscribe(posts => {
      console.log(posts);
      this.posts = posts;
    });
  }
  store(id:string){
    window.sessionStorage.setItem('Cart',id);
    this.storage = window.sessionStorage.getItem('Cart');
  }
}
