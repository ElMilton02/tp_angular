import { Injectable } from '@angular/core';
import { Beer } from './beer-list/beer';

@Injectable({
  providedIn: 'root' 
})
export class CartService {
  private cartItems: Beer[] = [];

 
  updateCart(beer: Beer): void {
    const existingItem = this.cartItems.find(item => item.name === beer.name);
    
    if (existingItem) {
      existingItem.quantity = beer.quantity;
    } else {
      this.cartItems.push({...beer});
    }
    

    this.cartItems = this.cartItems.filter(item => item.quantity > 0);
  }


  getCartItems(): Beer[] {
    return this.cartItems;
  }


  getTotal(): number {
    return this.cartItems.reduce(
      (total, item) => total + (item.price * item.quantity), 
      0
    );
  }
}