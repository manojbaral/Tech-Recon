import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ValidateService} from "app/services/validate.service";
import {FlashMessagesService} from "angular2-flash-messages";
import {AuthService} from "app/services/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  //property
  name:String;
  username:String;
  email:String;
  password:String;

  constructor(
    private validateService:ValidateService,
    private flashMessage:FlashMessagesService,
    private authService:AuthService,
    private router:Router) { }

  ngOnInit() {
  }

  //on register
  onRegisterSubmit(){
    const user={
      name:this.name,
      email:this.email,
      username:this.username,
      password:this.password
    };

    //Required Fields
    if (!this.validateService.validateRegister(user)){
      this.flashMessage.show('please fill in all fields',{cssClass: 'alert-danger',timeout: 3000});
      return false;
    }

    //Validate Email
    if (!this.validateService.validateEmail(user.email)){
      this.flashMessage.show('please use valid email',{cssClass: 'alert-danger',timeout: 3000});
      return false;
    }

    //Register users
    this.authService.registerUser(user).subscribe(data => {
      if (data.success){
        this.flashMessage.show('You are now register and can log in',{cssClass: 'alert-success',timeout: 3000});

      } else {
        this.flashMessage.show('Somethings went wrong,please try again later',{cssClass: 'alert-danger',timeout: 3000});

        this.router.navigate(['/login'])

      }
    })

  }


  }
