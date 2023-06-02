import { Component, OnInit } from '@angular/core';
// import { AuthService } from 'src/services/auth.service';
import { AuthService } from '../../services/auth.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{
  //This code initializes a form object with two properties: username and password. 
//The purpose of this code is to provide a template or model for a form that collects username and password inputs from a use
  form: any = {
    username: null,
    email: null,
    password: null
  };

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }


  //This code appears to be implementing an onSubmit method for a registration functionality in an Angular application. 
  //The purpose of this code is to handle the form submission when a user tries to register or sign up.
  onSubmit(): void {
    const { username, email, password } = this.form;

    this.authService.register(username, email, password).subscribe({
      next: (data) => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        
      },
      error: (err) => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
        
      }
    });
  }
}