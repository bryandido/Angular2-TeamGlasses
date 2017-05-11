import { Component } from '@angular/core';
import { GooglemapService } from '../../services/googlemap/googlemap.service';
import {Router} from '@angular/router';

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
constructor(private router:Router){
}
  submitForm(){
    console.log(this.fullname,this.state,this.phonenumber);
    window.localStorage.setItem('fullname',this.fullname);
    window.localStorage.setItem('addressline1',this.addressline1);
    window.localStorage.setItem('addressline2',this.addressline2);
    window.localStorage.setItem('state',this.state);
    window.localStorage.setItem('city',this.city);
    window.localStorage.setItem('zip',String[this.zip]);
    window.localStorage.setItem('country',this.country);
    window.localStorage.setItem('phonenumber',String[this.phonenumber]);
    this.router.navigateByUrl('/confirmation');
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
