import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'login',
  templateUrl: 'login.component.html',
})

export class LoginComponent implements OnInit {
  userForm:FormGroup;
  login={
    email:'',
    password:''
  };

  emailHits:any;


  constructor(private _userService: UserService, private _formbuilder:FormBuilder,private _router:Router){}

  ngOnInit(){
    this.userForm = this._formbuilder.group({
      email: ['',Validators.email],
      password: ['',[Validators.minLength(5), Validators.maxLength(10)]]
    })
  }

  submit(){

    this.login.email=this.userForm.value.email;
    this.login.password=this.userForm.value.password;

    this._userService.getByEmail(this.login.email).subscribe(
      data => {this.emailHits = data;
        if (this.emailHits.user[0].password===this.login.password){
          window.sessionStorage.setItem('userID',this.emailHits.user[0].user_id);
          this._router.navigateByUrl('/');
        }
        else{
          alert("Invalid Login. Please try again.")
        }
      }
      ,
      error => alert(error),
      () => console.log("getByEmail Success")
    )
  }
}
