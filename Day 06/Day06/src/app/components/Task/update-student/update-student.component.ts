import { Component, OnInit, signal, Signal } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { StudentsService } from '../../../services/students.service';
import {  FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-student',
  standalone: true,
  imports: [RouterModule,FormsModule],
  providers: [StudentsService],
  templateUrl: './update-student.component.html',
  styles: ``,
})
export class UpdateStudentComponent implements OnInit {
  id: any;
  name:any;
  student:any;

  constructor(activeLink: ActivatedRoute, private studentsService: StudentsService,private router:Router) {
    this.id = activeLink.snapshot.params['id'];
  }
  ngOnInit(): void {
    let student = this.studentsService.GetById(this.id).subscribe({
      next:(data:any)=>{
        this.student = {...data}
        console.log( this.student);
      }
    });
  }

  updateStudent(){
    console.log(this.student);
    this.studentsService.Update(this.student).subscribe({
      next:()=>{
        this.router.navigate(['/students']);
      },
      error:()=>{
        console.log("error while updating");
      }
    })
  }
}
