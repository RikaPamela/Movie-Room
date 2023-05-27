import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Movie } from '../types/data-types';
import { WishlistService } from '../services/wishlist.service';

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

  
  /*removeFromWishlist() {
    if ()
    this.cartProducts = this.cartProducts.filter(product => product.id !== productId)
  }
} */
 
} 
