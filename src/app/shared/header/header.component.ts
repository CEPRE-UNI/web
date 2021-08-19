import { Component, OnInit } from '@angular/core';
import *  as countdown from 'countdown';
interface Time{
  days:number;
  hours:number;
  minutes:number;
  seconds:number;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  time:Time=null;
  timerId:number=null;
  constructor() { }

  ngOnInit( ): void {
    let date=new Date("2021-08-21");
   countdown(date,(ts)=>{
     this.time=ts;
   }, countdown.DAYS |countdown.HOURS | countdown.MINUTES | countdown.SECONDS);
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    if(this.timerId){
clearInterval(this.timerId);
    }
  }

}
