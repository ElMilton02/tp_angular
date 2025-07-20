import { Component } from '@angular/core';
import { BeerListComponent } from '../beer-list/beer-list';
import { CartComponent } from '../cart/cart';

@Component({
  selector: 'app-brewery-beers',
  imports: [BeerListComponent, CartComponent],
  templateUrl: './brewery-beers.html',
  styleUrl: './brewery-beers.scss'
})
export class BreweryBeers {

}
