import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService{
  constructor(private _http:Http){
    console.log('User Service Ready...');
  }
  getAll(){
    return this._http.get('./teamglasses-api/api.php/user?transform=1').map(res => res.json());
  }
  getById(id:string){
    return this._http.get('./teamglasses-api/api.php/user/' + id + '?transform=1').map(res => res.json());
  }
  getByEmail(email:string){
    return this._http.get('./teamglasses-api/api.php/user?filter[]=email,eq,' + email + '&transform=1').map(res => res.json());
  }
  create(user:string){
    return this._http.post('./teamglasses-api/api.php/user/', user);
  }
  update(user: string){
    // return this._http.put('./teamglasses-api/api.php/user/' + user.user_id, user);
  }
  delete(id: string){
    return this._http.delete('./teamglasses-api/api.php/user/' + id);
  }
}
