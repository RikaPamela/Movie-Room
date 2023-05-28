import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Movie } from '../types/data-types';
import { WishlistService } from '../services/wishlist.service';
import Swal from 'sweetalert2';
import { AuthService } from 'src/services/auth.service';

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
  showNotFound: any;
 isLoggedIn: any;

  constructor(private movieService: ProductService, private router: Router,
  private watchlistService: WishlistService, private authService: AuthService) { }

  addToWatchlist(movie: Movie) {
    this.watchlistService.addToWatchlist(movie); // Add the movie to the watchlist
  }


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

    // const searchedTitle = event.target.value;
    // const movieFound = this.movies.includes(searchedTitle);
    // this.showNotFound = !movieFound;
  }

  
}

//display swal alert when user not signed in 
  // showSignInMessage() {
  //   Swal.fire({
  //     title: 'Sign In or Register',
  //     text: 'Please sign in or register to add to your watchlist.',
  //     icon: 'info',
  //     showCancelButton: true,
  //     confirmButtonText: 'Sign In',
  //     cancelButtonText: 'Register',
  //     showCloseButton: true
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       // Redirect to sign in page
  //       // Replace '/login' with the actual route for sign in page
  //       this.router.navigateByUrl('/login');
  //     } else if (result.dismiss === Swal.DismissReason.cancel) {
  //       // Redirect to register page
  //       // Replace '/register' with the actual route for register page
  //       this.router.navigateByUrl('/register');
  //     }
  //   });

  
