import { identifierName } from '@angular/compiler';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete-student',
  standalone: true,
  imports: [],
  templateUrl: './delete-student.component.html',
  styles: ``
})
export class DeleteStudentComponent {
  id:any;
  constructor( private activeRoute:ActivatedRoute){
    this.id = activeRoute.snapshot.params['id'];
  }
}
