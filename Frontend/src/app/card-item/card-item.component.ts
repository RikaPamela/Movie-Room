import { Component, Input } from '@angular/core';
import { Movie } from '../types/data-types';
import { WishlistService } from '../services/wishlist.service';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent {
  @Input() movie?: Movie;

  constructor(public watchList: WishlistService) {}

  removeFromCard() {
    if(this.movie){
      this.watchList.removeFromCard(this.movie?.id);
    }
  }

  ngOnInit() {
    console.log('Movie in CardItemComponent:', this.movie);
  }
}
