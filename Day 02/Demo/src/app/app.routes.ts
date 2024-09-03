import { Routes } from '@angular/router';
import { UsersComponent } from './Components/Day04/Routing/users/users.component';
import { errorContext } from 'rxjs/internal/util/errorContext';
import { ErrorComponent } from './Components/Day04/Routing/error/error.component';
import { UserDetailsComponent } from './Components/Day04/Routing/user-details/user-details.component';
import { ProfileComponent } from './Components/Day04/Routing/profile/profile.component';

export const routes: Routes =
[
  {path:"",component:UsersComponent},
  {path:"users",component:UsersComponent},
  {path:"users/:id",component:UserDetailsComponent},
  {path:"profile",component:ProfileComponent},
  {path:"**",component:ErrorComponent}// else
];
