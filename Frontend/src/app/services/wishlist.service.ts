import { Injectable } from '@angular/core';
import { Movie } from '../types/data-types';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  private watchlistKey = 'watchlist';
  watchlist: Movie[] = [];

  constructor() {
    this.loadWatchlistFromLocalStorage(); // Load watchlist from local storage on service initialization
  }

  addToWatchlist(movie: Movie) {
    const existingMovie = this.watchlist.find(m => m.title === movie.title);
    if (existingMovie) {
      // Movie already exists in the watchlist
      Swal.fire({
        icon: 'warning',
        title: 'Movie Already Added',
        text: 'The movie is already added to your watchlist.',
        timer: 1000, // Popup will automatically close after 2 seconds
        showConfirmButton: false
      });
    } else {
      this.watchlist.push(movie); // Add the movie to the watchlist
      this.saveWatchlistToLocalStorage(); // Save the updated watchlist to local storage

      // Display SweetAlert popup
      Swal.fire({
        icon: 'success',
        title: 'Movie Added',
        text: 'The movie has been added to your watchlist.',
        timer: 1000, // Popup will automatically close after 2 seconds
        showConfirmButton: false
      });
    }
  }

  removeFromWatchlist(movie: Movie): void {
    const index = this.watchlist.indexOf(movie);
    if (index > -1) {
      this.watchlist.splice(index, 1); // Remove the movie from the watchlist
      this.saveWatchlistToLocalStorage(); // Save the updated watchlist to local storage
    }
  }

  getWatchlist(): Movie[] {
    return this.watchlist; // Retrieve the watchlist array
  }

  private saveWatchlistToLocalStorage(): void {
    localStorage.setItem(this.watchlistKey, JSON.stringify(this.watchlist)); // Save watchlist to local storage
  }

  private loadWatchlistFromLocalStorage(): void {
    const storedWatchlist = localStorage.getItem(this.watchlistKey); // Retrieve watchlist from local storage
    if (storedWatchlist) {
      this.watchlist = JSON.parse(storedWatchlist); // Parse and assign watchlist if it exists in local storage
    }
  }
}