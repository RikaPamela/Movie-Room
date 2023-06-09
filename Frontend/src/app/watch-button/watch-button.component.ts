import { Component, OnInit } from '@angular/core';
import { Movie } from '../types/data-types';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ProductService } from '../services/product.service';
import { WishlistService } from '../services/wishlist.service';
//youb have to import the cart services and function

@Component({
  selector: 'app-watch-button',
  templateUrl: './watch-button.component.html',
  styleUrls: ['./watch-button.component.scss']
})
export class WatchButtonComponent implements OnInit {
  movie: Movie | undefined
  // const trailerLink = this.movie.trailer;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private location: Location,
    private watchlistService: WishlistService
    ){}
  
  ngOnInit(): void {
    this.get_Movie();
  }

  //geting a movie by id
   get_Movie(): void {
    const id = (this.route.snapshot.paramMap.get('id'));
    console.log("this is an id :",id)
    this.productService.get(id)
      .subscribe((movie:any) => {
        console.log(movie)
        this.movie = movie;
      } );
  }

  // openYoutube() {
  //   window.open('https://www.youtube.com/watch?v=4j0lrw6lim4E', '_blank');
  // }

  addToWatchlist(movie: Movie) {
    this.watchlistService.addToWatchlist(movie); // Add the movie to the watchlist
  }
  
   
  


  
  
  
}


