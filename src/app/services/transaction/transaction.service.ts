import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Headers} from '@angular/http';

@Injectable()
export class TransactionService{
  constructor(private _http:Http){
    console.log('Transaction Service Ready...');
  }
// Change URL depending on where you're hosting it.
  getAll(){
    return this._http.get('http://192.168.56.1/teamglasses/teamglasses-api/api.php/transaction?&transform=1').map(res => res.json());
  }
  getByUserId(id:number){
    return this._http.get('http://192.168.56.1/teamglasses/teamglasses-api/api.php/transaction?filter[]=user_id,eq,' + id + '&transform=1').map(res => res.json());
  }
  getById(id:number){
    return this._http.get('http://192.168.56.1/teamglasses/teamglasses-api/api.php/transaction?filter[]=id,eq,' + id + '&transform=1').map(res => res.json());
  }
  getByName(email:string){
    return this._http.get('http://192.168.56.1/teamglasses/teamglasses-api/api.php/transaction?filter[]=email,eq,' + email + '&transform=1').map(res => res.json());
  }
  getByType(type:string){
    return this._http.get('http://192.168.56.1/teamglasses/teamglasses-api/api.php/transaction?filter[]=type,eq,' + type + '&transform=1').map(res => res.json());
  }
  postTransaction(transaction:any){
    var json = JSON.stringify(transaction);
    var params = json;
    var headers = new Headers();
    headers.append('Content-Type','application/json');
    console.log(json);
    return this._http.post('http://192.168.56.1/teamglasses/teamglasses-api/api.php/transaction/', params, {headers: headers}).map(res => res.json());
  }
  update(product:string){
    //return this._http.put('http://10.50.1.169/teamglasses-api/api.php/product/' + product.product_id, product);
  }
  delete(id: string){
    return this._http.delete('http://192.168.56.1/teamglasses/teamglasses-api/api.php/transaction/' + id).map(res => res.json());
  }
}
