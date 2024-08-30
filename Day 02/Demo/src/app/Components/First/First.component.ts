import { Component } from '@angular/core';
import { SecondComponent } from '../second/second.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [SecondComponent,FormsModule],
  templateUrl: './First.component.html',
  styleUrl: './First.component.css',
})
export class FirstComponent {
  name = 'ali';
  type = 'button';
  ImgSrc = 'carlos-lugo-PfIzX6BwnZs-unsplash.jpg';
  firstName = "";
  lastName = "";

  changeName() {
    this.name = 'mohamed';
  }

  changeImgSrc() {
    this.ImgSrc = 'toa-heftiba-z2EbQN08ZL0-unsplash.jpg';
  }
  changeImgSrc2() {
    this.ImgSrc = 'carlos-lugo-PfIzX6BwnZs-unsplash.jpg';
  }
  storeInput(event:any){
    console.log(event);
    this.firstName = event.target.value;
  }
}
