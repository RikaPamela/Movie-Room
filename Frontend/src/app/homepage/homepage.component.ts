import { Component } from '@angular/core';
import { Movie } from '../types/data-types';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
  movie: Movie[]= [];
  filter: any;

  constructor(public productService: ProductService) {}

  ngOnInit() {
    // this.getAllProducts();
  }

  // getAllProducts(): void {
  //   this.productService.getAll().subscribe((data) => {
  //     this.movie = data;
  //     console.log(this.movie);

  //   });
  // }
}
