import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'navbar',
  templateUrl: 'navbar.component.html',
})
export class NavbarComponent implements OnInit {
  loggedIn: Boolean;

  ngOnInit(){
    //console.log(window.sessionStorage.getItem('userID'));
    if(window.sessionStorage.getItem('userID') == null){
      this.loggedIn = false;
    }
    else {
      this.loggedIn = true;
    }
  }
  logoff(){
    window.sessionStorage.removeItem('userID');
    location.reload();
  }
}
