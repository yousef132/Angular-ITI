import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent {
  constructor(ActiveRoute:ActivatedRoute){
    console.log(ActiveRoute);
    console.log(ActiveRoute.snapshot.params["id"]);
    console.log(ActiveRoute.snapshot.params["_values"]);
  }
}
