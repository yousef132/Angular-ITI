import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { StudentsService } from '../../../services/students.service';

@Component({
  selector: 'app-student-details',
  standalone: true,
  imports: [RouterModule],
  providers:[StudentsService],
  templateUrl: './student-details.component.html',
  styles: ``,
})
export class StudentDetailsComponent implements OnInit {
  ID: number;
  student:any;
  constructor(activeRoute: ActivatedRoute, private service:StudentsService) {
    this.ID = activeRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.student = this.service.GetById(this.ID).subscribe({
      next:(data)=>{
        this.student = data;

      },
      error:(error)=>{
        console.log(error);
      }
    })
  }

}
