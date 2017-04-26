import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService{

  constructor(private _http:Http){
    console.log('User Service Ready...');
  }
// Change URL depending on where you're hosting it.
  getAll(){
    return this._http.get('http://localhost/teamglasses/teamglasses-api/api.php/user?transform=1').map(res => res.json());
  }
  getById(id:number){
    return this._http.get('http://localhost/teamglasses/teamglasses-api/api.php/user/' + id + '?transform=1').map(res => res.json());
  }
  getByEmail(email:string){
    return this._http.get('http://localhost/teamglasses/teamglasses-api/api.php/user?filter[]=email,eq,' + email + '&transform=1').map(res => res.json());
  }
  create(user:string){
    return this._http.post('http://localhost/teamglasses/teamglasses-api/api.php/user/', user).map(res => res.json());
  }
  update(user:string){
    //return this._http.put('http://10.50.1.169/teamglasses-api/api.php/user/' + user.user_id, user);
  }
  delete(id: string){
    return this._http.delete('http://localhost/teamglasses/teamglasses-api/api.php/user/' + id).map(res => res.json());
  }
}
