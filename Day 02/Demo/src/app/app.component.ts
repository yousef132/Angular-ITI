import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponent } from './Components/First/First.component';

// each component contains 4 Parts :
//  1- tmplate
//  2- style
//  3- logic
//  4- selector


@Component({
  selector: 'app-root', // selector
  standalone: true, //
  imports: [RouterOutlet,FirstComponent],
  templateUrl: './app.component.html', // template
  styleUrl: './app.component.css' // style
})
export class AppComponent { // logic
  title = 'Demo';
}
