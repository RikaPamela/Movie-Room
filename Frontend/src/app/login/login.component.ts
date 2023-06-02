import { Component } from '@angular/core';
// import { AuthService } from 'src/services/auth.service';
import { AuthService } from '../../services/auth.service';

// import { TokenStorageService } from 'src/services/token-storage.service';
import { TokenStorageService } from '../../services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
//This code initializes a form object with two properties: username and password. 
//The purpose of this code is to provide a template or model for a form that collects username and password inputs from a user.
  form: any = {
    username: null,
    password: null
  };

  //This code initializes several properties that are commonly used in an authentication or login functionality.
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
username: any;


//has all the services
  constructor(private authService: AuthService, private tokenStorage: TokenStorageService) { }


  //this code checks if a token exists in the tokenStorage service, and if so, it sets the isLoggedIn property to true and retrieves the user roles from the token storage. 
  //This code is typically used to check the user's authentication status and retrieve relevant information, such as roles, during the component initialization phase.
  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      
      this.roles = this.tokenStorage.getUser().roles;
    }
  }



//This code appears to be implementing an onSubmit method for a login functionality in an Angular application. 
//The purpose of this code is to handle the form submission when a user tries to log in.
  onSubmit(): void {
    const { username, password } = this.form;

    this.authService.login(username, password).subscribe({
      next: (data) => {
        localStorage.setItem('uid',data.id);
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        this.reloadPage();
        window.location.replace("/home")
      },
      error: (err) => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
   });
  }

  //This code defines a reloadPage method that is used to reload or refresh the current page.
  reloadPage(): void {
    window.location.reload();
  }
}
