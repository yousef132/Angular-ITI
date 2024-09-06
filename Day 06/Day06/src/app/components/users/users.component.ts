import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { provideHttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports:[RouterModule,UserComponent],
  providers: [],
  templateUrl: './users.component.html',
  styles: ``,
})
export class UsersComponent implements OnInit {
  users: any;
  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.usersService.getAllUsers().subscribe({
      next: (users) => {
        this.users = users;
        console.log(users);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('completed');
      }
    }

    );
  }
}
