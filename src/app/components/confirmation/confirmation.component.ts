import { Component } from '@angular/core';
import { GooglemapService } from '../../services/googlemap/googlemap.service';
import { CheckoutComponent } from '../checkout/checkout.component';
import { CustomerService } from '../../services/customer/customer.service';
import {ProductService} from '../../services/product/product.service';
import { DomSanitizer } from '@angular/platform-browser';
import { TransactionService } from '../../services/transaction/transaction.service';

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
  transaction = {
    payer_email: '',
    user_id: '',
    billing_first_name: '',
    billing_last_name: '',
    billing_address_line_1: '',
    billing_address_line_2: '',
    billing_city: '',
    billing_state: '',
    billing_country: '',
    shipping_name: '',
    shipping_address_line_1: '',
    shipping_address_line_2: '',
    shipping_city: '',
    shipping_state: '',
    shipping_country: ''};


  imgsrc: string = '//www.google.com/maps/embed/v1/directions?origin=360+S+11th+Street+San+Jose+CA+USA&destination=1274+S+Mayfair+Ave+Daly+City+CA+USA&key=AIzaSyC8Y0-TP7HlFgSAyjPTIrgKqzL1_7Ro0qE';
  fullname: string = '';
  addressline1: string = '';
  addressline2: string = '';
  state: string = '';
  city: string = '';
  zip: number;
  country: string = '';
  phonenumber: number;
  link:string='//www.google.com/maps/embed/v1/directions?origin=1+Washington+Sq+San+Jose+CA+USA&destination='+this.addressline1.replace(/\s+/g, '+')+'+San+Jose+CA+USA&key=AIzaSyC8Y0-TP7HlFgSAyjPTIrgKqzL1_7Ro0qE';
  data:string;
  duration: '';



  constructor(private _mapService: GooglemapService, private _customerService: CustomerService, private _productService: ProductService, public sanitizer: DomSanitizer, private _transactionService: TransactionService) {
    console.log(this.addressline1, this.city, this.state);

    this._mapService.getShippingTime(this.addressline1, this.city, this.state).subscribe(time => {
      this.time = time;
      this.duration = time.rows[0].elements[0].duration.text;
    });
/*
    this._customerService.getAll().subscribe(posts => {
      this.posts = posts;
      console.log(posts);
      console.log(this.link);
    });*/

    this._transactionService.getByUserId(Number[window.sessionStorage.getItem('userID')]).subscribe(transaction =>{
      console.log(transaction.shipping_name);
      console.log(transaction);
    });
    }
  }
