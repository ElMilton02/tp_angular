import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Beer } from './Beer'; 
import { FormsModule } from '@angular/forms';
import { CartService } from '../cart.service';
import { InputIntegerComponent } from '../input-integer/input-integer';

@Component({
  standalone: true, 
  selector: 'app-beer-list',
  imports: [CommonModule, FormsModule, InputIntegerComponent],
  templateUrl: './beer-list.html',
  styleUrls: ['./beer-list.scss'] 
})

export class BeerListComponent implements OnInit {
 
  beers: Beer[] = [
    {
      "name" :"corona",
      "type" :"rubia",
      "price" :23,
      "stock" :42,
      "image": 'assets/img/cerveza.jpg',  
      clearance: false,  
      quantity: 0,
    },
    {
      "name" :"cristal",
      "type" :"IPA",
      "price" :20,
      "stock" :0,
      "image": 'assets/img/cerveza.jpg', 
      clearance: true,
      quantity: 0,
    },
    {
      "name" :"quilmes",
      "type" :"negra",
      "price" :25,
      "stock" :10,
      "image": 'assets/img/cerveza.jpg', 
      clearance: false,  
      quantity: 0, 
    },
  ];


  constructor(private cartService: CartService) { }


  ngOnInit(): void {

  }
  updateBeerQuantity(beer: Beer, newQuantity: number): void {
    beer.quantity = newQuantity;
    this.cartService.updateCart(beer); 
  }

}