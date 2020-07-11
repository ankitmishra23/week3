import { Component, OnInit,Input } from '@angular/core';
import {FormsModule,ReactiveFormsModule, FormGroup, FormBuilder, Validators} from '@angular/forms';
import { UserService } from '../user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login:FormGroup;
submitform=false;
logged=true;

@Input() key:string;
  constructor(private log:FormBuilder,private user:UserService) {
    this.ngOnInit();
   }

  ngOnInit(): void {
    this.login=this.log.group(
      {
        email:this.log.control("",[Validators.required,Validators.email]),
        password:this.log.control("",[Validators.required,Validators.minLength(8)])
      }
    )
  }
  onSubmit()
  {
    
  
    this.submitform=true;
    if(this.login.invalid)
    {
      alert("Something is wrong");
      this.logged=false;
      return;
    }
    else{
      if((JSON.parse(window.localStorage.getItem(this.login.controls['email'].value+""+String(this.login.controls['password'].value)))))
      {
        this.key=JSON.parse(window.localStorage.getItem(this.login.controls['email'].value+""+String(this.login.controls['password'].value)));
        alert("Loged In!! Click on tracker!!");
        
        const newkey=(this.login.controls['email'].value+""+String(this.login.controls['password'].value));
        window.sessionStorage.setItem(newkey,JSON.stringify(this.login.value));
        this.user.getkey(newkey);
        this.logged=true;
      }
      else
      {
        alert("register first.");
        this.logged=false;
      }
    }
  }
  


}
