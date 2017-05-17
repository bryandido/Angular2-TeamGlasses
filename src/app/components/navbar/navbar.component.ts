import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'navbar',
  templateUrl: 'navbar.component.html',
})
export class NavbarComponent implements OnInit {
  loggedIn: Boolean;

  ngOnInit(){
    console.log(window.sessionStorage.getItem('userID'));
    if(window.sessionStorage.getItem('userID') == null){
      this.loggedIn = false;
      console.log("is null");
    }
    else {
      this.loggedIn = true;
      console.log("is not null");
    }
  }
  logoff(){
    window.sessionStorage.removeItem('userID');
    window.location.href="/";
  }
}
