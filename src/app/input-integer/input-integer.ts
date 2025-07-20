import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-input-integer',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './input-integer.html',
  styleUrl: './input-integer.scss'
})
export class InputIntegerComponent  {

  @Input ()
  quantity: number = 0;

  @Input()
  max: number = 0;

  @Output()
  quantityChange: EventEmitter<number> = new EventEmitter<number>();  

  @Output()
  maxReached: EventEmitter<number> = new EventEmitter<number>();



  upQuantity(): void {
    if (this.quantity < this.max) {
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    } else {
      this.maxReached.emit(this.max);
    }
  }

  downQuantity(): void {
    if (this.quantity > 0) {
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }
  }
  
  changeQuantity(event: any): void {
  const value = Number(event.target.value);
  if (value >= 0 && value <= this.max) {
    this.quantity = value;
    this.quantityChange.emit(this.quantity);
  }
}
}