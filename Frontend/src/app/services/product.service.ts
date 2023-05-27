import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Movie } from '../types/data-types';
import { BehaviorSubject, map, tap } from 'rxjs';

// import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl = 'http://localhost:8080/api';


  constructor(private http: HttpClient) { }

  //getting All Movies
  getAll(): Observable<any> {
    return this.http.get(`${this.baseUrl}/movies`);
    
  }

  public productList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");
  public searchPopular = new BehaviorSubject<string>("")

  
  
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


  findByTitle(title: any): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.baseUrl}/movies?.title=${title}`);
  }
 

  searchMovie(searchQuery: string): Observable<Array<Movie>> {
    return this.http.get(`${this.baseUrl}/movies?title=${searchQuery}`)
      .pipe(
        map((response: any) => response.Search)
      );
  }

  // Method for searchbar //
  searchMovies(searchTerm: string) {
    this.search.next(searchTerm);
  }
 
}