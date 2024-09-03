import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  name ="";
  age = 0;


 @Output() Event = new EventEmitter();
  FireData(){

    let obj ={
      name : this.name,
      age:this.age
    }
    this.Event.emit(obj);
  }
}
