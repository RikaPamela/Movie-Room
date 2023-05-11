import { Component } from '@angular/core';
//youb have to import the cart services and function

@Component({
  selector: 'app-watch-button',
  templateUrl: './watch-button.component.html',
  styleUrls: ['./watch-button.component.scss']
})
export class WatchButtonComponent {

  
}

// import { Component, Input } from '@angular/core';
// import { CartService } from 'src/app/services/cart.service';
// import { Product } from 'src/app/types/data-type';

// @Component({
//   selector: 'app-cart-item',
//   templateUrl: './cart-item.component.html',
//   styleUrls: ['./cart-item.component.scss'],
// })
// export class CartItemComponent {
//   @Input() product?: Product;

//   constructor(public cartService: CartService) {}

//   removeFromCard() {
//     if (this.product) {
//       this.cartService.removeFromCard(this.product?.id);
//     }
//   }
// }
