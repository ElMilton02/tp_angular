import { Component } from '@angular/core';
import { Beer } from '../Beer'; 

@Component({
  standalone: true, 
  selector: 'app-beer-list',
  imports: [],
  templateUrl: './beer-list.html',
  styleUrls: ['./beer-list.scss'] 
})

export class BeerListComponent implements OnInit {
 
  beers: Beer[] = [
    {
      "name" :"corona",
      "type" :"rubia",
      "price" :23,
      "stock" :2,
      clearance: false,  
    },
    {
      "name" :"cristal",
      "type" :"IPA",
      "price" :20,
      "stock" :2,
      clearance: true,
    },
    {
      "name" :"quilmes",
      "type" :"negra",
      "price" :25,
      "stock" :2,
      clearance: false,   
    },
  ];


  constructor() { }


  ngOnInit(): void {

  }
 }