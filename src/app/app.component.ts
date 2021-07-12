import { Component,OnInit } from '@angular/core';

declare var $:JQueryStatic;
export var jQuery: any = window["jQuery"];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{ 

  ngOnInit() {
    
  }

}