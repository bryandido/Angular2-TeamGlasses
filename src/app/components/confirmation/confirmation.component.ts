import { Component } from '@angular/core';
import { GooglemapService } from '../../services/googlemap/googlemap.service';
import { CheckoutComponent } from '../checkout/checkout.component';
import { CustomerService } from '../../services/customer/customer.service';

@Component({
  moduleId: module.id,
  selector: 'confirmation',
  templateUrl: 'confirmation.component.html',
})
export class ConfirmationComponent  {
time:any;
posts:any[];
addrline1:string='1274 S Mayfair';
city:string='Daly City';
state:string='CA';
duration:'';
customer:{id:number, firstname:string, lastname:string, email:string, password:string, address_line_1:string, address_line_2:string, city:string, state:string, country:string}={
  id:1, firstname:'Bala', lastname:'Kyaw',email:'balanyan.kyaw@sjsu.edu',password:'12345',address_line_1:'52',address_line_2:'Maple Street', city:'San Jose', state:'CA', country:'USA'
};
constructor(private _productService: GooglemapService, private _customerService: CustomerService){

  this._productService.getShippingTime(this.addrline1,this.city,this.state).subscribe(time => {
    this.time = time;
    this.duration=time.rows[0].elements[0].duration.text;
  });
  this._customerService.getAll().subscribe(posts => {
    this.posts = posts;
    console.log(posts);
    console.log(this.customer);
  })
  this._customerService.create(this.customer);
//  this._customerService.create(this.customer);
}
  calculate(){
    alert("Your item will arrive in" + this.duration);
}
}
