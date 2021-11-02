import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';

@Component({
  selector: 'app-grupo02',
  templateUrl: './grupo02.component.html',
  styleUrls: ['./grupo02.component.css']
})
export class Grupo02Component implements OnInit {

  constructor(public _data:InfoPaginaService) { }

  ngOnInit(): void {
  }

}
