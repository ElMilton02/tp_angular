import { Injectable } from '@angular/core';
import { Beer } from './beer-list/Beer';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  private cartItems: Beer[] = [];

  private cartSubject = new BehaviorSubject<Beer[]>([]);
  cart$ = this.cartSubject.asObservable();

  addToCart(beer: Beer): void {
    const existing = this.cartItems.find(item => item.name === beer.name);
    if (existing) {
      existing.quantity += beer.quantity;
    } else {
      this.cartItems.push({ ...beer });
    }
    this.cartSubject.next(this.cartItems);
  }

  updateCart(beer: Beer): void {
    const existing = this.cartItems.find(item => item.name === beer.name);
    if (existing) {
      existing.quantity = beer.quantity;

      if (beer.quantity <= 0) {
        this.cartItems = this.cartItems.filter(item => item.name !== beer.name);
      }
    } else if (beer.quantity > 0) {
      this.cartItems.push({ ...beer });
    }

    this.cartSubject.next(this.cartItems);
  }

  getCartItems(): Beer[] {
    return this.cartItems;
  }

  getTotal(): number {
    return this.cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }
}
