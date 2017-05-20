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
  cart: number[]=[];
  //total: number = Number[window.localStorage.getItem('total')];


  latestTransaction = parseInt(window.sessionStorage.getItem('latestTransaction'));

  imgsrc: string = '//www.google.com/maps/embed/v1/directions?origin=360+S+11th+Street+San+Jose+CA+USA&destination=1274+S+Mayfair+Ave+Daly+City+CA+USA&key=AIzaSyC8Y0-TP7HlFgSAyjPTIrgKqzL1_7Ro0qE';
  fullname: string;
  addressline1: string='';
  addressline2: string;
  state: string = '';
  city: string = '';
  zip: number;
  country: string = '';
  phonenumber: number;
  cardnumber=window.sessionStorage.getItem('cardnumber');
  nameoncard=window.sessionStorage.getItem('nameoncard');
  expirationdate=window.sessionStorage.getItem('expirationdate');
  cvv=window.sessionStorage.getItem('cvv');
  link:string;
  static:string;
  data:string;
  duration: '';
  total:number=0;
  constructor(private _mapService: GooglemapService, private _customerService: CustomerService, private _productService: ProductService, public sanitizer: DomSanitizer, private _transactionService: TransactionService) {
    console.log(this.addressline1, this.city, this.state);
    console.log(window.sessionStorage.getItem('latestTransaction'));
    this._transactionService.getById(this.latestTransaction).subscribe(transaction => {

      this.fullname = transaction.transaction[0].shipping_name;
      this.addressline1=transaction.transaction[0].shipping_address_line_1;
      this.city = transaction.transaction[0].shipping_city;
      this.state= transaction.transaction[0].shipping_state;
      this.link='https://www.google.com/maps/embed/v1/directions?origin=1+Washington+Sq+San+Jose+CA+USA&destination='+this.addressline1.replace(/\s+/g, '+')+'+'+this.city+'+'+this.state+'+USA&key=AIzaSyC8Y0-TP7HlFgSAyjPTIrgKqzL1_7Ro0qE';
      console.log(this.addressline1);
      this._mapService.getShippingTime(this.addressline1, this.city, this.state).subscribe(time => {
        this.time = time;
        this.duration = time.rows[0].elements[0].duration.text;
      });
    });
    this.cart = JSON.parse(sessionStorage.getItem('Cart'));
    for (var i = 0; i < this.cart.length; i++) {
      this._productService.getById(this.cart[i]).subscribe(posts => {
        this.posts.push(posts);
        this.total += posts.price;
        window.localStorage.setItem('total',String[this.total]);
      });
    }
  }
  print(): void {
    window.print();
}
}
