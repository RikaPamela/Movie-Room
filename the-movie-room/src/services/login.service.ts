import { Injectable } from '@angular/core';

import { AuthService } from './auth.service';
import { Observable, of, delay, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private authService: AuthService) { }
  isUserLoggedIn: boolean = false;

  login(userName: string, password: string): Observable<any> {
     console.log(userName);
     console.log(password);
     this.isUserLoggedIn = userName == 'admin' && password == 'admin';
     localStorage.setItem('isUserLoggedIn', this.isUserLoggedIn ? "true" : "false"); 

  return of(this.isUserLoggedIn).pipe(
     delay(1000),
     tap(val => { 
        console.log("Is User Authentication is successful: " + val); 
     })
  );
  }


}
