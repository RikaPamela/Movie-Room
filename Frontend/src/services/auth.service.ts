import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
// import {Router} from '@angular/router'

// const AUTH_API = 'http://localhost:8080/api/';
const AUTH_API = 'https://backend-c9v5.onrender.com/api/';

// https://backend-c9v5.onrender.com


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  _router: any;

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'login' + '/' + 'signin', {
      username,
      password
    }, httpOptions);
  }

  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'register' + '/' + 'signup', {
      username,
      email,
      password
    }, httpOptions);
  }

  
}
