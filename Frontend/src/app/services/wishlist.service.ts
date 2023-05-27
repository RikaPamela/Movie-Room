import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
import { Movie } from '../types/data-types';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  private watchlistKey = 'watchlist';
  // watchlistArray: Movie [] = [];

  watchlist: Movie[] = [];

  constructor() {
    this.loadWatchlistFromSessionStorage(); // Load watchlist from session storage on service initialization
  }

  addToWatchlist(movie: Movie) {
    this.watchlist.push(movie); // Add the movie to the watchlist
    this.saveWatchlistToSessionStorage(); // Save the updated watchlist to session storage
  }


  getWatchlist(): Movie[] {
    return this.watchlist; // Retrieve the watchlist array
  }

  private saveWatchlistToSessionStorage(): void {
    sessionStorage.setItem(this.watchlistKey, JSON.stringify(this.watchlist)); // Save watchlist to session storage
  }

  private loadWatchlistFromSessionStorage(): void {
    const storedWatchlist = sessionStorage.getItem(this.watchlistKey); // Retrieve watchlist from session storage
    if (storedWatchlist) {
      this.watchlist = JSON.parse(storedWatchlist); // Parse and assign watchlist if it exists in session storage
    }
  }
  

  // removeFromCard(movieId: any) {
  //   this.watchlistArray = this.watchlistArray.filter(movie => movie.id !== movieId)
  // } 
}