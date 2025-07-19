import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Beer } from './Beer'; 
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true, 
  selector: 'app-beer-list',
  imports: [CommonModule, FormsModule],
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


  constructor() { }


  ngOnInit(): void {

  }

  upQuantity(beer: Beer): void {
    if (beer.quantity < beer.stock) {
      beer.quantity++;
    }
  }

  onChangeQuantity(event: KeyboardEvent, beer: Beer): void {
    console.log(event.target);
  }

  downQuantity(beer: Beer): void {
    if (beer.quantity > 0) {
      beer.quantity--;
    }
  }

}