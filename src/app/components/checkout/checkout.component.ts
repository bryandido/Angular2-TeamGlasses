import { Component } from '@angular/core';
import { GooglemapService } from '../../services/googlemap/googlemap.service';
import {Router} from '@angular/router';
import { TransactionService} from '../../services/transaction/transaction.service';

@Component({
  moduleId: module.id,
  selector: 'checkout',
  templateUrl: 'checkout.component.html',
})
export class CheckoutComponent {
posts:any[];
duration:'';
data:string;

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

fullname:string;
addressline1:string;
addressline2:string;
state:string;
city:string;
zip:number;
country:string;
phonenumber:number;
cardnumber:string;
nameoncard:string;
expirationdate:string;
cvv:string;
constructor(private router:Router, private _transactionService:TransactionService){
  console.log(window.sessionStorage.getItem('userID'))
}

  submitForm(){
    window.sessionStorage.setItem('cardnumber',this.cardnumber);
    window.sessionStorage.setItem('nameoncard',this.nameoncard);
    window.sessionStorage.setItem('expirationdate',this.expirationdate);
    window.sessionStorage.setItem('cvv',this.cvv);
    this.transaction.user_id = window.sessionStorage.getItem('userID');
    this.transaction.shipping_name=this.fullname;
    this.transaction.shipping_address_line_1=this.addressline1;
    this.transaction.shipping_address_line_2=this.addressline2;
    this.transaction.shipping_city=this.city;
    this.transaction.shipping_state=this.state;
    this.transaction.shipping_country=this.country;

    this._transactionService.postTransaction(this.transaction).subscribe(
      data => this.data = JSON.stringify(data),
      error => alert(error),
      () => console.log("Finished")
    );

    this._transactionService.getByUserId(6).subscribe(transaction =>{
      this.posts = transaction.transaction;
      window.sessionStorage.setItem('latestTransaction',this.posts[(this.posts.length) - 1].id); //This code is correct.
    });

  /*  this._transactionService.getByUserId(Number[window.sessionStorage.get]).subscribe(data => {

  })*/
/*
    console.log(this.fullname,this.state,this.phonenumber);
    window.localStorage.setItem('fullname',this.fullname);
    window.localStorage.setItem('addressline1',this.addressline1);
    window.localStorage.setItem('addressline2',this.addressline2);
    window.localStorage.setItem('state',this.state);
    window.localStorage.setItem('city',this.city);
    window.localStorage.setItem('zip',String[this.zip]);
    window.localStorage.setItem('country',this.country);
    window.localStorage.setItem('phonenumber',String[this.phonenumber]); */
    this.router.navigateByUrl('/confirmation');
}
}
