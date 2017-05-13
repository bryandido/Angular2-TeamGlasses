import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GooglemapService{

  constructor(private _http:Http){
    console.log('Googlemap Service Ready...');
  }
// Change URL depending on where you're hosting it.
  getShippingTime(addrline1:string,city:string,state:string){
    console.log(addrline1, city, state);
    return this._http.get('https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=37.335204,-121.881072&destinations='+addrline1+city+state+'&key=AIzaSyB63QilAqU4cLcz2BAHqq38_gnKxZwVPFY').map(res => res.json());
  }
}
