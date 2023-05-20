import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../types/data-types';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  baseUrl = 'http://localhost:8080/api';
  wishlist: Movie[] =[];

  constructor(private http: HttpClient) { }

  //getting All wishlist
  getAll(): Observable<any> {
    return this.http.get(`${this.baseUrl}/wishlists`);
  }
  
  //getting wishlist by id
  get(id: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/wishlists/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/wishlists`, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/wishlists/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${this.baseUrl}/wishlists/${id}`);
  }
  removeWishlist(title: string) {
    this.wishlist = this.wishlist.filter(product => product.title !== title)
  }

  deleteAll(): Observable<any> {
    return this.http.delete(`${this.baseUrl}/wishlists`);
  }

  findByTitle(title: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/wishlists?title=${title}`);
  }
}