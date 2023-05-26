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

  //filter
  filterAll(filter: string):Observable<any> {
    let url = `${this.baseUrl}/movies`;

    // Add filter parameter to the URL based on the selected criterion
    if (filter === 'latest') {
      url += '?orderBy=release_date&sortOrder=desc&limit=10';
    } else if (filter === 'upcoming') {
      url += '?orderBy=release_date&sortOrder=asc&limit=10';
    } else if (filter === 'popular') {
      url += '?orderBy=ratings&sortOrder=desc&limit=10';
    }

    return this.http.get(url);
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

  // findByTitle(title: any): Observable<any> {
  //   return this.http.get(`${this.baseUrl}/movies?title=${title}`);
  // }

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