import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../../services/info-pagina.service';

@Component({
  selector: 'app-escolar',
  templateUrl: './escolar.component.html',
  styleUrls: ['./escolar.component.css']
})
export class EscolarComponent implements OnInit {

  constructor(public _data:InfoPaginaService) { }

  ngOnInit(): void {
  }

}
