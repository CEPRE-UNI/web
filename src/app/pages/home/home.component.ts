import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import Swal from 'sweetalert2';
import { InfoPaginaService } from '../../services/info-pagina.service';
import *  as countdown from 'countdown';
interface Time {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  time: Time = null;
  timerId: number = null;
  constructor(public _eventos: InfoPaginaService) {

  }

  ngOnInit(): void {
    let date = new Date("april 22, 2022 23:59:59");
    countdown(date, (ts) => {
      this.time = ts;
    }, countdown.DAYS | countdown.HOURS | countdown.MINUTES | countdown.SECONDS);

  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    if (this.timerId) {
      clearInterval(this.timerId);
    }
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

  alertInscrpcion() {
    // Swal.fire({
    //   text: "El grupo 1 inició el 13 dic. 2021. Sin embargo, el grupo 2 está disponible. ",
    //   icon: "info",
    //   timer: 5000,
    //   timerProgressBar: true
    // });
  }
  
  agendaCiclo(ciclo: string) {
    if (ciclo==="pre"){
      Swal.fire({
        // title: 'Sweet!',
        // text: 'Modal with a custom image.',
        imageUrl: 'assets/img/agenda/pre.jpg',
        // imageWidth: 400,
        // imageHeight: 200,
        imageAlt: 'Custom image',
      })
    }else{
      Swal.fire({
        // title: 'Sweet!',
        // text: 'Modal with a custom image.',
        imageUrl: 'assets/img/agenda/basico.jpg',
        // imageWidth: 400,
        // imageHeight: 200,
        imageAlt: 'Custom image',
      })
    }
    
  }
}
