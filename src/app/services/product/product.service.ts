import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Headers} from '@angular/http';

@Injectable()
export class ProductService{
  constructor(private _http:Http){
    console.log('Product Service Ready...');
  }
// Change URL depending on where you're hosting it.
  getAll(){
    return this._http.get('http://10.250.190.152/teamglasses/teamglasses-api/api.php/product?&transform=1').map(res => res.json());
  }
  getById(id:number){
    return this._http.get('http://10.250.190.152/teamglasses/teamglasses-api/api.php/product/' + id + '&transform=1').map(res => res.json());
  }
  getByName(email:string){
    return this._http.get('http://10.250.190.152/teamglasses/teamglasses-api/api.php/product?filter[]=email,eq,' + email + '&transform=1').map(res => res.json());
  }
  getByType(type:string){
    return this._http.get('http://10.250.190.152/teamglasses/teamglasses-api/api.php/product?filter[]=type,eq,' + type + '&transform=1').map(res => res.json());
  }
  postProduct(product:any){
    var json = JSON.stringify(product);
    var params = json;
    var headers = new Headers();
    headers.append('Content-Type','application/json');
    console.log(json);
    return this._http.post('http://10.250.190.152/teamglasses/teamglasses-api/api.php/product/', params, {headers: headers}).map(res => res.json());
  }
  delete(id: string){
    return this._http.delete('http://10.250.190.152/teamglasses/teamglasses-api/api.php/product/' + id).map(res => res.json());
  }
}
