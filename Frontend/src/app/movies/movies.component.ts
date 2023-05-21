import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Movie } from '../types/data-types';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  // movies: any;
  movies: any[] = [];
  // movies: Movie[] = [];

  currentMovie = null;
  currentIndex = -1;
  title = '';

  constructor(private movieService: ProductService , private router:Router) { }

  ngOnInit(): void {
    this.retrieveMovies();
  }

  
  getMovie() {
    if (this.movies) {
      this.movieService.get(this.movies);
    }
  }

 //retrieve a single movie by index when the button watch is clicked
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
          this.movies = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}