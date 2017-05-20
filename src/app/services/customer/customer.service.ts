import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Headers} from '@angular/http';

@Injectable()
export class CustomerService{

  constructor(private _http:Http){
    console.log('Customer Service Ready...');
  }
// Change URL depending on where you're hosting it.
  getAll(){
    return this._http.get('http://localhost/teamglasses/teamglasses-api/api.php/customer?transform=1').map(res => res.json());
  }
  getById(id:number){
    return this._http.get('http://localhost/teamglasses/teamglasses-api/api.php/product/' + id + '&transform=1').map(res => res.json());
  }
  getByName(email:string){
    return this._http.get('http://localhost/teamglasses/teamglasses-api/api.php/customer?filter[]=email,eq,' + email + '&transform=1').map(res => res.json())//.then(this.handleSuccess,this.handleError('Error getting'));
  }
  getByType(type:string){
    return this._http.get('http://localhost/teamglasses/teamglasses-api/api.php/customer?filter[]=type,eq,' + type + '&transform=1').map(res => res.json());
  }
  create(customer:any){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    console.log(customer);
    return this._http.post('http://localhost/teamglasses/teamglasses-api/api.php/customer/', customer, {headers:headers}).map(res => res.json());
  }
  delete(id: string){
    console.log("yes");
    return this._http.delete('http://localhost/teamglasses/teamglasses-api/api.php/customer/' + id).map(res => res.json());
  }
  handleSuccess(res:any){
    console.log("no");
    return res.data;
  }
  }
