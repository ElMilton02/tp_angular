import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../cart.service';
import { Beer } from '../beer-list/Beer';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.html',
  styleUrl: './cart.scss'
})
export class CartComponent implements OnInit {
  cartItems: Beer[] = [];
  total: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cart$.subscribe(items => {
      this.cartItems = items;
      this.total = this.cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    });
  }

  actualizarCantidad(item: Beer, nuevaCantidad: number): void {
    item.quantity = nuevaCantidad;
    this.cartService.updateCart(item);
  }
}
