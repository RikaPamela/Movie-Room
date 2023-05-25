import { Component, Input } from '@angular/core';
import { WishlistService } from '../services/wishlist.service';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Movie } from '../types/data-types';

@Component({
  selector: 'app-add-to-watch',
  templateUrl: './add-to-watch.component.html',
  styleUrls: ['./add-to-watch.component.scss']
})
export class AddToWatchComponent {
  @Input() movie?: Movie

  constructor(private movieService: ProductService, private router: Router,
    private watchlistService: WishlistService) { }

  addToWatchlist() {
    this.watchlistService.addToWatchlist(this.movie)
  }
  message(){
    // window.alert('Please SignIn')
  }
}
