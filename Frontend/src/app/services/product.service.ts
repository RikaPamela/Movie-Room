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
  //url for the backend to connect with the frontend
  baseUrl = 'http://localhost:8080/api';


  constructor(private http: HttpClient) { }

  //getting All Movies
  getAll(): Observable<any> {
    return this.http.get(`${this.baseUrl}/movies`);
    
  }


  //This code is declaring and initializing several BehaviorSubjects in a component or service. 
  //BehaviorSubject is a type of subject in RxJS that stores the "current" value and emits it to subscribers.
  // It retains the latest value and provides it to new subscribers upon subscription.


  public productList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");
  public searchPopular = new BehaviorSubject<string>("")

  
  
  //getting movie by id
  get(id: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/movies/${id}`);
  }
//creating a new movie
  create(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/movies`, data);
  }

  //updating a movie
  update(id: any, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/movies/${id}`, data);
  }

  //deleting an movie by id
  delete(id: any): Observable<any> {
    return this.http.delete(`${this.baseUrl}/movies/${id}`);
  }
//deleting al the movies
  deleteAll(): Observable<any> {
    return this.http.delete(`${this.baseUrl}/movies`);
  }

//finding a movie by tiltle
  findByTitle(title: any): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.baseUrl}/movies?.title=${title}`);
  }
 
//search a movie
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