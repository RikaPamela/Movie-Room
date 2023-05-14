import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Movie } from '../types/data-types';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
//youb have to import the cart services and function

@Component({
  selector: 'app-watch-button',
  templateUrl: './watch-button.component.html',
  styleUrls: ['./watch-button.component.scss']
})
export class WatchButtonComponent implements OnInit{
  
  movie: Movie | undefined

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private location: Location
    ){}
  
  ngOnInit(): void {
    this.get_Movie();
  }

  
   get_Movie(): void {
    const id = (this.route.snapshot.paramMap.get('id'));
    console.log("this is an id :",id)
    this.productService.get(id)
      .subscribe((movie:any) =>{
        console.log(movie)
        this.movie = movie;
      } );
  }
   
  


  
  
  
}


