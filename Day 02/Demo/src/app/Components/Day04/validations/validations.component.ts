import { createMayBeForwardRefExpression } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-validations',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './validations.component.html',
  styleUrl: './validations.component.css'
})
export class ValidationsComponent {

  formValidation = new FormGroup({
    name:new FormControl("KOKO",[Validators.required]),
    age:new FormControl(0,[Validators.required,Validators.max(100)])

  })
  get NameValid(){
   return this.formValidation.controls["name"].valid;
  }

  get AgeValid(){
   return this.formValidation.controls["age"].valid;
  }

  getData(){

    if(this.formValidation.valid){
      console.log("all for valid");
    }
    else{
      if(this.formValidation.controls["name"].invalid){
        console.log("name Not Valied")
      }

      if(this.formValidation.controls["age"].invalid){
        console.log("Age Not Valied")
      }
    }
  }
}
