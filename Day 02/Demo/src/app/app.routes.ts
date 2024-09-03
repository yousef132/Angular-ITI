import { Routes } from '@angular/router';
import { UsersComponent } from './Components/Day04/Routing/users/users.component';
import { errorContext } from 'rxjs/internal/util/errorContext';
import { ErrorComponent } from './Components/Day04/Routing/error/error.component';
import { UserDetailsComponent } from './Components/Day04/Routing/user-details/user-details.component';
import { ProfileComponent } from './Components/Day04/Routing/profile/profile.component';
import { HomeComponent } from './Components/Task4/home/home.component';
import { StudentsComponent } from './Components/Task4/students/students.component';
import { StudentDetailsComponent } from './Components/Task4/student-details/student-details.component';

export const routes: Routes =
[
  {path:"",component:HomeComponent},
  {path:"users",component:UsersComponent},
  {path:"students",component:StudentsComponent},
  {path:"studentsDetails/:id",component:StudentDetailsComponent},
  {path:"users/:id",component:UserDetailsComponent},
  {path:"profile",component:ProfileComponent},
  {path:"**",component:ErrorComponent}// else
];
