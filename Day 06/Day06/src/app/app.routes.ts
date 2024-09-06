import { Routes } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { errorContext } from 'rxjs/internal/util/errorContext';
import { ErrorComponent } from './components/error/error.component';
import { StudentsComponent } from './components/Task/students/students.component';
import { StudentDetailsComponent } from './components/Task/student-details/student-details.component';
import { CreateStudentComponent } from './components/Task/create-student/create-student.component';
import { UpdateStudentComponent } from './components/Task/update-student/update-student.component';
import { DeleteStudentComponent } from './components/Task/delete-student/delete-student.component';

export const routes: Routes = [
  {path: "", redirectTo:"students",pathMatch:"full"},
  {path: "users", component:UsersComponent},

  {path: "students", component:StudentsComponent},
  {path: "students/:id", component:StudentDetailsComponent},
  {path: "create-student", component:CreateStudentComponent},
  {path: "update-student/:id", component:UpdateStudentComponent},
  {path: "delete-student/:id", component:DeleteStudentComponent},

  {path: "user-details/:id", component:UserDetailsComponent},
  {path: "**", component:ErrorComponent},
];
