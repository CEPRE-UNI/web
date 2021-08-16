import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
  eventos:any;
  cargada =false;
  constructor( private hhtp: HttpClient) {
    this.cargarEventos();
   }

   private cargarEventos(){
     this.hhtp.get('assets/data/data_eventos.json').subscribe((resp:any[]) =>{
      this.cargada=true
      this.eventos=resp;
    })
   }
}
