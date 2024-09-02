import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-all-in-one',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './all-in-one.component.html',
  styleUrl: './all-in-one.component.css',
})
export class AllInOneComponent {
  Students: { name: string; age: number }[] = [];
  name = '';
  age = 0;
  addEntry() {
    if (this.age < 30) {
      let stObj = {
        name: this.name,
        age: this.age,
      };
      this.Students.push(stObj);
    }

    console.log(this.Students);
  }
}
