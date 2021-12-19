import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import Swal from 'sweetalert2';
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public _eventos:InfoPaginaService) {
    
   }

  ngOnInit(): void {
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 1
      }
    },
    nav: true
  }

  alertInscrpcion(){
    Swal.fire({
      text: "Este grupo inició el 13 dic. 2021. Sin embargo, el grupo 2 está disponible. ",
      icon: "info",
      timer: 5000,
      timerProgressBar: true
  });
  }
}
