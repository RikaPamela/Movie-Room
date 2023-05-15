/*import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';


export interface movie{
  title: String,
  description: String,
  genre: String,
  release_date: Number,
  duration: Number,
  image_url: String, 
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
private baseurl = "http://localhost:8080/movies/${id}";

  constructor(private http:HttpClient) { }

getMovie():Observable<movie[]>{
  return this.http.get<movie[]>(this.baseurl);

}
  // getAllProducts(): Observable<MovieRequest> {
  //   return this.http.get<MovieRequest>('http://localhost:8080/movies/${id}');
  // }

}
*/


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl = 'http://localhost:8081/api';


  constructor(private http: HttpClient) { }

  //getting All Movies
  getAll(): Observable<any> {
    return this.http.get(`${this.baseUrl}/movies`);
  }
  
  //getting movie by id
  get(id: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/movies/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/movies`, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/movies/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${this.baseUrl}/movies/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(`${this.baseUrl}/movies`);
  }

  findByTitle(title: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/movies?title=${title}`);
  }
}