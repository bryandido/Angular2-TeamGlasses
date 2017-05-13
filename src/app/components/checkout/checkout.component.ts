import { Component } from '@angular/core';
import { GooglemapService } from '../../services/googlemap/googlemap.service';


@Component({
  moduleId: module.id,
  selector: 'checkout',
  templateUrl: 'checkout.component.html',
})
export class CheckoutComponent {
posts:any[];
duration:'';
fullname:string;
addressline1:string;
addressline2:string;
state:string;
city:string;
zip:number;
country:string;
phonenumber:number;
/* constructor(private _productService: GooglemapService){
 this._productService.getShippingTime(this.checkout.addressline1,this.checkout.city,this.checkout.state).subscribe(posts => {
    this.posts = posts;
    this.duration=posts.rows[0].elements[0].duration.text;
  });
} */
  submitForm(){
    console.log(this.fullname,this.state,this.phonenumber);
}
}
interface type{
  fullname:string;
  addressline1:string;
  addressline2:string;
  state:string;
  city:string;
  zip:number;
  country:string;
  phonenumber:number;
}
