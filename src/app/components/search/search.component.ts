import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'search',
  templateUrl: 'search.component.html',
})
export class SearchComponent  {
  searchStr:string;
  searchProduct(){
    console.log(this.searchStr);
  }
}
