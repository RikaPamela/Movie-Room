import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
import { Movie } from '../types/data-types';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  // watchlistArray: Movie [] = [];

  watchlist: Movie[] = [];

  constructor() {}

  addToWatchlist(movie: Movie) {
    this.watchlist.push(movie); // Add the movie to the watchlist
  }


  getWatchlist(): Movie[] {
    return this.watchlist; // Retrieve the watchlist array
  }
  
  // addToWatchlist(watchlist: Movie) {
  //   this.watchlistArray.push(watchlist)

  // }
  

  // removeFromCard(movieId: any) {
  //   this.watchlistArray = this.watchlistArray.filter(movie => movie.id !== movieId)
  // } 
}