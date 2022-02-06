import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { InfoPaginaService } from '../../../services/info-pagina.service';
@Component({
  selector: 'app-basico',
  templateUrl: './basico.component.html',
  styleUrls: ['./basico.component.css']
})
export class BasicoComponent implements OnInit {

  constructor(public _basico: InfoPaginaService) { }

  ngOnInit(): void {
  }
  alertInscrpcion(ciclo: string) {
    if (ciclo === "pre") {
      Swal.fire({
        // title: 'Sweet!',
        // text: 'Modal with a custom image.',
        imageUrl: 'assets/img/agenda/pre.png',
        // imageWidth: 400,
        // imageHeight: 200,
        imageAlt: 'Custom image',
      })
    } else {
      Swal.fire({
        // title: 'Sweet!',
        // text: 'Modal with a custom image.',
        imageUrl: 'assets/img/agenda/basico.png',
        // imageWidth: 400,
        // imageHeight: 200,
        imageAlt: 'Custom image',
      })
    }



  }
}
