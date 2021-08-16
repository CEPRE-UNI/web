import { Component,OnInit } from '@angular/core';
import { InfoPaginaService } from './services/info-pagina.service';

declare var $:JQueryStatic;
export var jQuery: any = window["jQuery"];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  { 
  constructor( public _infoPaginaServices: InfoPaginaService){
    
  }
}