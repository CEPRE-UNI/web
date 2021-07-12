import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

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
