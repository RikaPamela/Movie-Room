import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Movie } from '../types/data-types';
import { WishlistService } from '../services/wishlist.service';

import Swal from 'sweetalert2';


@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  watchlist: Movie[] =[];

  movies: any;
  // currentMovie = null;
  // currentIndex = -1;
  title = '';
  uid = localStorage.getItem('uid')

  constructor(private movieService: ProductService , private router:Router,
    public wishlistService: WishlistService) { }

  ngOnInit(): void {
    // this.retrieveMovies();

    this.watchlist = this.wishlistService.getWatchlist();
    console.log(this.uid)
  }

  
  getMovie() {
    if (this.movies) {
      this.movieService.get(this.movies?.id);
    }
  }

 //retrieve a single movie by index when the button watch is clicked
  gotoM(index){
   return this.router.navigate(["watch-button",this.movies[index]._id])
  }

  // Call the service method to remove the movie from the watchlist
  removeMovieFromWatchlist(movie: Movie): void {
    this.promptConfirmationDialog(movie)
      .then((confirmed) => {
        if (confirmed) {
          this.removeFromWatchlist(movie);
          this.showRemovalSuccessPopup();
        }
      });
  }
  //prompt pop-up messages
  promptConfirmationDialog(movie: Movie): Promise<boolean> {
    return Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to remove this movie from your watchlist?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      return result.value;
    });
  }
  
  //removing a movie from a watch list
  removeFromWatchlist(movie: Movie): void {
    this.wishlistService.removeFromWatchlist(movie);
  }
  
  //prompt pop-up message
  showRemovalSuccessPopup(): void {
    Swal.fire({
      icon: 'success',
      title: 'Movie Removed',
      text: 'The movie has been removed from your watchlist.',
      timer: 1000, // Popup will automatically close after 2 seconds
      showConfirmButton: false
    });
  }
  
}


  // clearWatchlist(): void {
  //   this.wishlistService.clearWatchlist(); // Call the service method to clear the watchlist
  //     // Prompt confirmation with SweetAlert popup
  //     Swal.fire({
  //       title: 'Are you sure?',
  //       text: 'Do you want to remove all movies from your watchlist?',
  //       icon: 'warning',
  //       showCancelButton: true,
  //       confirmButtonText: 'Yes',
  //       cancelButtonText: 'Cancel'
  //     }).then((result) => {
  //       if (result.value) {
  //         // User confirmed, remove all movies logic here
    
  //         // Display success SweetAlert popup
  //         Swal.fire({
  //           icon: 'success',
  //           title: 'All Movies Removed',
  //           text: 'All movies have been removed from your watchlist.',
  //           timer: 2000, // Popup will automatically close after 2 seconds
  //           showConfirmButton: false
  //         });
  //       }
  //     });
  //   }

 