import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BeerListComponent } from './beer-list/beer-list';
import { CartComponent } from './cart/cart';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BeerListComponent, CartComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})

export class App {
  protected title: string = 'brewery!!!';
}
