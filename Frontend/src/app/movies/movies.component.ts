import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Movie } from '../types/data-types';
import { WishlistService } from '../services/wishlist.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  @Input() movie?: Movie

  movies: any[];
  searchTerm !: string;
  // currentMovie = null;
  // currentIndex = -1;
  title = '';
  searchQuery: string = '';
  searchKey: string = "";
  moviesFound: any;

  constructor(private movieService: ProductService, private router: Router,
  private watchlistService: WishlistService) { }

  addToWatchlist(movie: Movie) {
    this.watchlistService.addToWatchlist(movie); // Add the movie to the watchlist
  }

  // condition: any;
  // addToWatchlist() {
    // if (this.condition === false) {
    //   console.log('please login first.')
    // }
    // this.watchlistService.addToWatchlist(this.movie)
    // this.router.navigate(['wishlist'])
  // }

  ngOnInit(): void {
    //display the movies in the view
    this.retrieveMovies();

    this.movieService.search.subscribe((val: any) => {
      this.searchKey = val;
    })
  }


  getMovie() {
    if (this.movies) {
      this.movieService.get(this.movies);
    }
  }

  //retrieve a single movie by index when the button watch is clicked
  //single movie card with movie descriptions & youtube trailer.
  gotoM(index){
    return this.router.navigate(["watch-button",this.movies[index]._id])
  }

  //Getting the movies
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



  // refreshList(): void {
  //   this.retrieveMovies();
  //   this.currentMovie = null;
  //   this.currentIndex = -1;
  // }

  // setActiveMovie(movie: any, index: number): void {
  //   this.currentMovie = movie;
  //   this.currentIndex = index;
  // }

  // removeAllMovies(): void {
  //   this.movieService.deleteAll()
  //     .subscribe(
  //       response => {
  //         console.log(response);
  //         this.retrieveMovies();
  //       },
  //       error => {
  //         console.log(error);
  //       });
  // }

  search(event: any) {
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.movieService.search.next(this.searchTerm);
  }

  

}
