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
  movies: any[] = [];
  searchTerm !: string;
  currentMovie = null;
  currentIndex = -1;
  title = '';
  searchQuery: string = '';
  searchKey: string = "";

  constructor(private movieService: ProductService, private router: Router,
    private watchlistService: WishlistService) { }

  ngOnInit(): void {
    this.retrieveMovies();
    this.movieService.search.subscribe((val: any) => {
      this.searchKey = val;
    })
    //  this.onPopularClick();
    //  this.onLatestClick();
  }


  getMovie() {
    if (this.movies) {
      this.movieService.get(this.movies);
    }
  }

  //retrieve a single movie by index when the button watch is clicked
  gotoM(index) {
    return this.router.navigate(["watch-button", this.movies[index]._id])
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

  //filter buttons - Event handler for the "Latest" button
  onLatestClick(): void {
    this.movieService.filterAll('latest').subscribe((movies: any) => {
      this.movies = movies;
      console.log('latest movies:', movies);
    });

  }


  // Event handler for the "Popular" button
  onPopularClick(): void {
    this.movieService.filterAll('popular').subscribe((movies: any) => {
      this.movies = movies;
      console.log('popular movies:', movies);

    });
  }

  // Event handler for the "Upcoming" button
  onUpcomingClick(): void {
    this.movieService.filterAll('upcoming').subscribe((movies: any) => {
      this.movies = movies;
      console.log('Upcoming movie:', movies)
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

  search(event: any) {
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.movieService.search.next(this.searchTerm);
  }
  condition: any;
  addToWatchlist() {
    if (this.condition === false) {
      console.log('please login first.')
    }
    this.watchlistService.addToWatchlist(this.movie)
    this.router.navigate(['wishlist'])
  }
}
