import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../../services/info-pagina.service';

@Component({
  selector: 'app-intensivo',
  templateUrl: './intensivo.component.html',
  styleUrls: ['./intensivo.component.css']
})
export class IntensivoComponent implements OnInit {

  constructor( public _data:InfoPaginaService) { }

  ngOnInit(): void {
  }

}
