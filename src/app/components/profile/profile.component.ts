import { Component } from '@angular/core';
import { UserService } from '../../services/user/user.service';

@Component({
  moduleId: module.id,
  selector: 'profile',
  templateUrl: 'profile.component.html',
})
export class ProfileComponent  {
  user: any;
  firstname: string;
  lastname: string;
  email: string;
  gender: string;
  phoneNumber: string;
  password: string;

  register = {
		first_name:'',
		last_name:'',
		email: '',
		password: ''
	};

  data:string;
  emailHits: any;

  constructor(private _userService: UserService){
    //var a= parseInt(window.sessionStorage.getItem("userID"));
    //console.log(a)
    this._userService.getById(parseInt(window.sessionStorage.getItem("userID"))).subscribe(user => {
      this.user = user;
      //console.log(user);
      this.firstname=this.user.first_name;
      this.lastname=this.user.last_name;
      this.email=this.user.email;
      this.gender=this.user.gender;
      this.phoneNumber=this.user.phone_number;
      this.password=this.user.password;
      //console.log(this.firstname);
    });
  }
  edit(){
  document.getElementById("editfields").style.display="block";
  document.getElementById("viewfields").style.display="none";
  }

  cancel(){
  document.getElementById("editfields").style.display="none";
  document.getElementById("viewfields").style.display="block";
  }
  update(firstname: string, lastname: string, email: string, gender: string, phoneNumber: string, password: string) {
    this.firstname=firstname;
    this.lastname=lastname;
    this.email=email;
    this.gender=gender;
    this.phoneNumber=phoneNumber;
    this.password=password;
    this.cancel();

    this._userService.delete(window.sessionStorage.getItem('userID'));
    this._userService.createUser(this.register).subscribe(
			data => {
        this.register.email=this.email;
        this.register.first_name=this.firstname;
        this.register.last_name=this.lastname;
        this.register.password=this.password;
        this.data = JSON.stringify(data);
      },
			error => alert(error),
			() => console.log("Finished Adding User")
  );
  this._userService.getByEmail(this.email).subscribe(
    data => {this.emailHits = data;
        window.sessionStorage.setItem('userID',this.emailHits.user[this.emailHits.user.length - 1].user_id);
    })
  }
}
