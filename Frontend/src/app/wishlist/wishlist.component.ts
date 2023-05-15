import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Movie } from '../types/data-types';
import { WishlistService } from '../services/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent {
  wishlist: Movie[] =[];

  movies: any;
  currentMovie = null;
  currentIndex = -1;
  title = '';
  uid = localStorage.getItem('uid')

  constructor(private movieService: ProductService , private router:Router,
    private wishlistService: WishlistService) { }

  ngOnInit(): void {
    this.retrieveMovies();

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

@Input() product?: Movie;

  

  removeFromCard() {
    if (this.product) {
      this.wishlistService.removeWishlist(this.movies);
    }
  }


  retrieveMovies(): void {
    this.movieService.getAll().subscribe(
        data => {
          this.movies = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveMovies();
    this.currentMovie = null;
    this.currentIndex = -1;
  }

  setActiveMovie(movie: any, index: number): void {
    this.currentMovie = movie;
    this.currentIndex = index;
  }

  removeAllMovies(): void {
    this.movieService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.retrieveMovies();
        },
        error => {
          console.log(error);
        });
  }

  searchTitle(): void {
    this.movieService.findByTitle(this.title)
      .subscribe(
        data => {

          if(data)


          this.movies = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }



}
