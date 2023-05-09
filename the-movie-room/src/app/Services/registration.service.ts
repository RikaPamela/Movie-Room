import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  url: 'http://localhost:/8081'
  constructor(private http: HttpClient) { }

  register(){
    // this.http.post(this.url)
  }
}
