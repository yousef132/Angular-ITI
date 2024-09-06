import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [],
  providers:[UsersService],
  templateUrl: './user-details.component.html',
  styles: ``
})
export class UserDetailsComponent implements OnInit {
  Id= 0;
  user:any;
  constructor(activeRoute:ActivatedRoute,private usersSerivce:UsersService){
   this.Id = activeRoute.snapshot.params["id"];
  }
  ngOnInit(): void {
    this.usersSerivce.GetUserById(this.Id).subscribe({
      next:(data)=>{
        this.user=data;
      },
      error:(error)=>{

      }
    })
  }


}
