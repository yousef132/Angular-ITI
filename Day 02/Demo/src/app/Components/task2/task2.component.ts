import { Component } from '@angular/core';

@Component({
  selector: 'app-task2',
  standalone: true,
  imports: [],
  templateUrl: './task2.component.html',
  styleUrl: './task2.component.css',
})
export class Task2Component {
  images = [
    'oleg-moroz-cDpGASG2gU8-unsplash.jpg',
    'kin-shing-lai-GwWU0OtpEJk-unsplash.jpg',
    'declan-sun-P_gHajFu9rY-unsplash.jpg',
    'kelly-sikkema-vSNy_bWa5AE-unsplash.jpg',
  ];
  handler: number = 0;
  static counter = 0;

  ImgSrc = 'oleg-moroz-cDpGASG2gU8-unsplash.jpg';

  next() {
    if (Task2Component.counter === 3) return;
    let index = ++Task2Component.counter;
    this.ImgSrc = this.images[index];
  }

  previos() {
    if (Task2Component.counter === 0) return;
    let index = --Task2Component.counter;
    this.ImgSrc = this.images[index];
  }
  slide() {
    this.handler = window.setInterval(() => {
      if (Task2Component.counter === 3) {
        Task2Component.counter = 0;
      } else {
        Task2Component.counter++;
      }
      this.ImgSrc = this.images[Task2Component.counter];

      console.log(Task2Component.counter);
    }, 500);
  }

  stop() {
    window.clearInterval(this.handler);
  }
}
