import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-test-signals',
  standalone: true,
  imports: [],
  templateUrl: './test-signals.component.html',
  styleUrl: './test-signals.component.css',
})
export class TestSignalsComponent {
  counter = signal(0);
  counter2 = signal(0);
  user = signal({
    name: 'Ahmed',
    age: 25,
  })
  coutnerEffect = effect(()=>{
    console.log(5544545);
  });

  coutneEfect = effect(()=>{
    console.log(this.counter2());
    console.log("new line ");
  });

  // counter = 0;
  //   minus(){
  //     this.counter--;
  //   }
  //    plus(){
  //     this.counter++;
  //    }
  // }

  changeName (){
    this.user.update((u)=>{
      u.name = "Yousef Ali";
      return u;
    });
  }

  minus() {
    this.counter.update((num) => --num);
  }
  plus() {
    this.counter.update((num) => ++num);
  }
  reset() {
    this.counter.set(0);
  }

}
