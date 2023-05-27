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

  removeMovieFromWatchlist(movie: Movie): void {
    this.wishlistService.removeFromWatchlist(movie); // Call the service method to remove the movie from the watchlist

    // Prompt confirmation with SweetAlert popup
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to remove this movie from your watchlist?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.value) {
        // User confirmed, remove the movie logic here

        // Display success SweetAlert popup
        Swal.fire({
          icon: 'success',
          title: 'Movie Removed',
          text: 'The movie has been removed from your watchlist.',
          timer: 2000, // Popup will automatically close after 2 seconds
          showConfirmButton: false
        });
      }
  });

  }
  
  /*removeFromWishlist() {
    if ()
    this.cartProducts = this.cartProducts.filter(product => product.id !== productId)
  }
} */
 
} 
