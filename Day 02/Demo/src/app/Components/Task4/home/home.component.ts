import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  RegisterationForm = new FormGroup({
    name:new FormControl("",[Validators.required,Validators.minLength(3)]),
    age : new FormControl(null,[Validators.required,Validators.min(10),Validators.max(30)])
  });

  get NameValidation(){
    return this.RegisterationForm.controls["name"].valid;
  }

  get AgeValidation(){
    return this.RegisterationForm.controls["age"].valid;

  }
  GetData(){
    console.log(this.RegisterationForm.value);
  }
}
