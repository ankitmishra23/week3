import { Component, OnInit } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label,Color } from 'ng2-charts';


let male=0;
let female=0;
@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.css']
})
export class TrackerComponent implements OnInit {
  totalconfirmed:Number;
  totalrecovered:Number;
  totaldeaths:Number;
  totalmale:number=0;
  totalfemale:number=0;
  genderstatus:Array<any>;
  i=0;
  
  doughnutChartLabels: Label[] = ['Male','Female'];
  doughnutChartData: MultiDataSet = [
    []
  ];
  doughnutChartType: ChartType = 'doughnut';
  colors: Color[] = [
    {
      backgroundColor: [
        'black',
        'white'
      ]
    }
  ];

  constructor(private http:HttpClient,private statehttp:HttpClient,private genderhttp:HttpClient) { }
  states:Array<any>;
  ngOnInit(): void {
    this.http.get('https://covid19.mathdro.id/api/countries/india').subscribe((response)=>{
      console.log(response);
      this.totalconfirmed=response['confirmed'].value;
      this.totalrecovered=response['recovered'].value;
      this.totaldeaths=response['deaths'].value;
    })


    this.statehttp.get('https://api.covid19india.org/data.json').subscribe((newresponse)=>{
      //console.log(newresponse['statewise']);
      this.states=newresponse['statewise'];
      console.log(this.states);

    })

    this.genderhttp.get('https://api.covid19india.org/raw_data9.json').subscribe((anotherresponse)=>{
          this.genderstatus=anotherresponse['raw_data'];
          console.log(this.genderstatus);
          this.genderstatus.forEach((element)=>{
            if(element.gender==='M')
            {
              this.totalmale++;
            }
            else if(element.gender==='F')
            {
              this.totalfemale++;
            }
          })
          this.doughnutChartData=[[this.totalmale,this.totalfemale]];
    })
      
      
  }
  tablestatus=true;

  newdoughnutChartLabels:Label[] = ['Active','Confirmed','Deaths','recovered'];
  newdoughnutChartData:MultiDataSet = [
    []
  ];
  newdoughnutChartType:ChartType= 'doughnut';
  newcolors:Color[]= [
    {
      backgroundColor: [
        'red',
        'grey',
        'black','lightgreen'
      ]
    }
  ];
  showgraph(i:string){
    this.tablestatus=false;
    console.log(i);
    console.log("inside table");
    this.states.forEach((element)=>{
      if(element.state===i){
        this.newdoughnutChartData=[[element.active,element.confirmed,element.deaths,element.recovered]];
      }
    })
    

  }

  toggleshow()
  {
    this.tablestatus=true;
  }

}
