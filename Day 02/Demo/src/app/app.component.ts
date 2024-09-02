import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponent } from './Components/First/First.component';
import { SecondComponent } from './Components/second/second.component';
import { Task1Component } from './Components/task1/task1.component';
import { Task2Component } from './Components/task2/task2.component';
import { AllInOneComponent } from './Components/Day03/all-in-one/all-in-one.component';
import { LoginComponent } from './Components/Day03/componentInteraction/login/login.component';
import { HomeComponent } from './Components/Day03/componentInteraction/home/home.component';

// each component contains 4 Parts :
//  1- tmplate
//  2- style
//  3- logic
//  4- selector

@Component({
  selector: 'app-root', // selector
  standalone: true, //
  imports: [
    RouterOutlet,
    FirstComponent,
    SecondComponent,
    Task1Component,
    Task2Component,
    AllInOneComponent,
    LoginComponent,
    HomeComponent
  ],
  templateUrl: './app.component.html', // template
  styleUrl: './app.component.css', // style
})
export class AppComponent {
  PartentData = "Data From Parent";

  ChildData = "";

  getData(data:string){

    this.ChildData = data;
    console.log(data);
  }
}
