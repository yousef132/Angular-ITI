import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  // data sent to parent
   ChildData = 'Data From Child {{Login}}';

  // creat event
  // fire event [pass data to parent]

  @Output() MyEvent = new EventEmitter();

  fireNow(){
    this.MyEvent.emit(this.ChildData);
  }

}
