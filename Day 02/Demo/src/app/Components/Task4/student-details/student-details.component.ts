import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-details',
  standalone: true,
  imports: [],
  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.css'
})
export class StudentDetailsComponent {
  Id =0;
  constructor(ActiveRoute: ActivatedRoute){
    this.Id = ActiveRoute.snapshot.params["id"];
    console.log(ActiveRoute.snapshot.params);
  }
}
