import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormControl,FormArray,FormGroup,Validator, Validators} from '@angular/forms'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  
  submitform=false;
  register:FormGroup;
  //data;
  //addregister=[{username:String,
   // email:String,password:String}];
    constructor(private reg:FormBuilder) { 
      this.ngOnInit();
    }
  
    ngOnInit(): void {
      this.register=this.reg.group(
        {
          username:this.reg.control("",Validators.required),
          email:this.reg.control("",[Validators.required,Validators.email]),
          password:this.reg.control("",[Validators.required,Validators.minLength(8)])
        }
      )
    }
    onSubmit()
    {
      this.submitform=true;
      if(this.register.invalid)
      {
        alert("Something is wrong.");
        return;
      }
      else{
        //this.data=this.register.value;
        //this.addregister.push(this.data);
      console.log(this.register.value);
      //console.log(this.register.controls['username'].value);
      const key=this.register.controls['email'].value+""+String(this.register.controls['password'].value);
      window.localStorage.setItem(key,JSON.stringify(this.register.value))
      console.log(JSON.parse(window.localStorage.getItem(key)));
      alert("Register successful!! Click on login to continue");
      }
    }
}
