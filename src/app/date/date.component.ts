import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {
  currentdate:string;
  constructor() {
    setInterval(()=>{
     const dateobj=new Date();
      this.currentdate= dateobj.toDateString() +" "+dateobj.toLocaleTimeString();
    },1000);
   }

  ngOnInit(): void {
  }

}
