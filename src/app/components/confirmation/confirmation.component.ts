import { Component } from '@angular/core';
import { GooglemapService } from '../../services/googlemap/googlemap.service';
import { CheckoutComponent } from '../checkout/checkout.component';
import { CustomerService } from '../../services/customer/customer.service';
import {ProductService} from '../../services/product/product.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  moduleId: module.id,
  selector: 'confirmation',
  templateUrl: 'confirmation.component.html',
})
export class ConfirmationComponent {
  time: any;
  posts: Array<Object> = [];
  cart: number[];
  //total: number = Number[window.localStorage.getItem('total')];

  imgsrc: string = '//www.google.com/maps/embed/v1/directions?origin=360+S+11th+Street+San+Jose+CA+USA&destination=1274+S+Mayfair+Ave+Daly+City+CA+USA&key=AIzaSyC8Y0-TP7HlFgSAyjPTIrgKqzL1_7Ro0qE';
  fullname: string = window.localStorage.getItem('fullname');
  addressline1: string = (window.localStorage.getItem('addressline1'));
  addressline2: string = localStorage.getItem('addressline2');
  state: string = localStorage.getItem('state');
  city: string = localStorage.getItem('city');
  zip: number = Number[localStorage.getItem('zip')];
  country: string = localStorage.getItem('country');
  phonenumber: number = Number[localStorage.getItem('phonenumber')];
  link:string='//www.google.com/maps/embed/v1/directions?origin=1+Washington+Sq+San+Jose+CA+USA&destination='+this.addressline1.replace(/\s+/g, '+')+'+San+Jose+CA+USA&key=AIzaSyC8Y0-TP7HlFgSAyjPTIrgKqzL1_7Ro0qE';

  duration: '';

  customer: { id: number, firstname: string, lastname: string, email: string, password: string, address_line_1: string, address_line_2: string, city: string, state: string, country: string } =
  { id: 1, firstname: 'Bala', lastname: 'Kyaw', email: 'balanyan.kyaw@sjsu.edu', password: '12345', address_line_1: '52', address_line_2: 'Maple Street', city: 'San Jose', state: 'CA', country: 'USA' };

  constructor(private _mapService: GooglemapService, private _customerService: CustomerService, private _productService: ProductService, public sanitizer: DomSanitizer) {
    console.log(this.addressline1, this.city, this.state);

    this._mapService.getShippingTime(this.addressline1, this.city, this.state).subscribe(time => {
      this.time = time;
      this.duration = time.rows[0].elements[0].duration.text;
    });

    this._customerService.getAll().subscribe(posts => {
      this.posts = posts;
      console.log(posts);
      console.log(this.customer);
      console.log(this.link);
    });

    this._customerService.create(this.customer).subscribe();

    }
  }
