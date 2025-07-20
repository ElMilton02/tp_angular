import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../cart.service';
import { Beer } from '../beer-list/Beer';

@Component({
  selector: 'app-cart',
  standalone: true, // Añadir standalone
  imports: [CommonModule],
  templateUrl: './cart.html',
  styleUrl: './cart.scss'
})
export class CartComponent {
  cartItems: Beer[] = [];
  total: number = 0;

  constructor(private cartService: CartService) {
    this.cartItems = this.cartService.getCartItems();
    this.total = this.cartService.getTotal();
  }
}