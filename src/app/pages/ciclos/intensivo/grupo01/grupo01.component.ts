import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';

@Component({
  selector: 'app-grupo01',
  templateUrl: './grupo01.component.html',
  styleUrls: ['./grupo01.component.css']
})
export class Grupo01Component implements OnInit {

  constructor(public _data:InfoPaginaService) { }

  ngOnInit(): void {
  }

}
