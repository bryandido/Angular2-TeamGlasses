import { Component } from '@angular/core';
import { UserService } from '../../services/user/user.service';

@Component({
  moduleId: module.id,
  selector: 'profile',
  templateUrl: 'profile.component.html',
})
export class ProfileComponent  {
posts:any=[];
userid:number=0;
firstname:string;
lastname:string;
email:string;
  constructor(private _userService: UserService){
    var a=JSON.parse(window.sessionStorage.getItem("userID"));
    a = String[a];
    console.log(a);
    this.userid = Number[window.sessionStorage.getItem('userID')];
    console.log(this.userid);
    this._userService.getById(2).subscribe(posts => {
      this.posts = posts;
      console.log(posts);
      this.firstname=this.posts.first_name;
      this.lastname=this.posts.last_name;
      this.email=this.posts.email;
      console.log(this.firstname);
    });
    console.log(this.posts);
  }

}
