import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { InfoPaginaService } from '../../../services/info-pagina.service';
@Component({
  selector: 'app-pre',
  templateUrl: './pre.component.html',
  styleUrls: ['./pre.component.css']
})
export class PreComponent implements OnInit {

  constructor(public _pre:InfoPaginaService) { }

  ngOnInit(): void {
  }
  alertInscrpcion(){
    Swal.fire({
      text: "Se que estas entusiasmado, las inscripciones a la Prueba de Selección es el jueves 15 de julio",
      icon: "info",
      timer: 5000,
      timerProgressBar: true
  });
  }
}
