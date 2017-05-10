import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

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
  create(product:string){
    return this._http.post('http://10.250.190.152/teamglasses/teamglasses-api/api.php/product/', product).map(res => res.json());
  }
  update(product:string){
    //return this._http.put('http://10.50.1.169/teamglasses-api/api.php/product/' + product.product_id, product);
  }
  delete(id: string){
    return this._http.delete('http://10.250.190.152/teamglasses/teamglasses-api/api.php/product/' + id).map(res => res.json());
  }
}
