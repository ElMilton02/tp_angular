import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})

export class App {
  protected title: string = 'brewery!!!';
}
