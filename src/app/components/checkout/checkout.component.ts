import { Component } from '@angular/core';
import { GooglemapService } from '../../services/googlemap/googlemap.service';

@Component({
  moduleId: module.id,
  selector: 'checkout',
  templateUrl: 'checkout.component.html',
})
export class CheckoutComponent  {
posts:any[];
addrline1:string;
city:'';
state:'';
duration:'';
constructor(private _productService: GooglemapService){

  this._productService.getShippingTime(this.addrline1,this.city,this.state).subscribe(posts => {
    this.posts = posts;
    this.duration=posts.rows[0].elements[0].duration.text;
  });
}
  calculate(){
    alert("Your item will arrive in" + this.duration);
}
}
