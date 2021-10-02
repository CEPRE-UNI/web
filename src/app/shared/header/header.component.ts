import { Component, OnInit } from '@angular/core';
import *  as countdown from 'countdown';
import Swal from 'sweetalert2';

interface Time {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  time: Time = null;
  timerId: number = null;
  constructor() { }
  alertInscrpcion() {
    Swal.fire({
      text: "Sé que estas entusiasmado, tendrás más información en Diciembre ",
      icon: "info",
      timer: 5000,
      timerProgressBar: true
    });
  }
  ngOnInit(): void {
    let date = new Date("2021-10-05 18:00:00");
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

}
