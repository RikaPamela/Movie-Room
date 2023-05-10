import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { movie } from '../types/data-types';


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent  implements OnInit {
  movie: any = [];
 
constructor(private productService :ProductService){}
  @Input() product?:movie;
 

  ngOnInit() {
   this.productService.getMovie().subscribe(data => {
    this.movie = data,
   error =>
    console.log(error)
   }
   )
   
}
}
