import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
;

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
