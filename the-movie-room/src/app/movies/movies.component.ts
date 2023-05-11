import { Component, OnInit } from '@angular/core';
import { ProductService } from '../Services/product.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  movies: any;
  currentMovie = null;
  currentIndex = -1;
  title = '';

  constructor(private movieService: ProductService) { }

  ngOnInit(): void {
    this.retrieveMovies();
  }

  //for the card - single watch
  getMovie() {
    if (this.movies) {
      this.movieService.get(this.movies?.id);
    }
  }



  retrieveMovies(): void {
    this.movieService.getAll()

      .subscribe(
        data => {
          this.movies = data;
          // console.log(data);
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
          this.movies = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}