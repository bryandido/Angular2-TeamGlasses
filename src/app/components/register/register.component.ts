import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
	moduleId: module.id,
	selector: 'register',
	templateUrl: 'register.component.html',
})


export class RegisterComponent implements OnInit{

  userForm : FormGroup;

	register = {
		first_name:'',
		last_name:'',
		email: '',
		password: ''
	};

	data: string;

	constructor(private _userService: UserService, private _formbuilder: FormBuilder, private _router: Router) {};

  ngOnInit(){
    this.userForm = this._formbuilder.group({
      first_name: ['',Validators.required],
      last_name: ['',Validators.required],
      email: ['',Validators.email],
      password: ['',[Validators.minLength(5), Validators.maxLength(10)]]
    })
  }

  submit(){
    this.register.first_name=this.userForm.value.first_name;
    this.register.last_name=this.userForm.value.last_name;
    this.register.email=this.userForm.value.email;
    this.register.password=this.userForm.value.password;

		this._userService.createUser(this.register).subscribe(
			data => this.data = JSON.stringify(data),
			error => alert(error),
			() => console.log("Finished Adding User")
  );

    alert("Registered!");
    this._router.navigateByUrl('/');

  }
}
