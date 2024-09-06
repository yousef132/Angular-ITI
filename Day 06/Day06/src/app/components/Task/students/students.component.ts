import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../../services/students.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [RouterModule,CommonModule],
  providers:[StudentsService],
  templateUrl: './students.component.html',
  styles: ``
})
export class StudentsComponent implements OnInit {
  students:any;
  constructor(private service:StudentsService){

  }
  ngOnInit(): void {
    this.students = this.service.GetAll().subscribe({
      next:(data)=>{
        this.students = data;
      },
      error:(error)=>{
        console.log(error);
      }
    })
  }
}
