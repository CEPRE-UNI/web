import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { infoPaginaPre } from '../interfaces/info-pagina-pre.service';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
  eventos: any;
  pre: infoPaginaPre = {};
  basico: infoPaginaPre = {};
  escolar: infoPaginaPre = {};
  intensivo: infoPaginaPre = {};
  cargada = false;
  cargada_pre = false;
  cargada_basico = false;
  cargada_escolar = false;
  cargada_intensivo = false;
  constructor(private hhtp: HttpClient) {
    this.cargarEventos();
    this.cargarPre();
    this.cargarBasico();
    this.cargartercero();
    this.cargarIntensivo();

  }

  private cargarEventos() {
    this.hhtp.get('assets/data/data_eventos.json').subscribe((resp: any[]) => {
      this.cargada = true
      this.eventos = resp;
    })
  }
  private cargarPre() {
    this.hhtp.get('assets/data/data-pre.json').subscribe((resp: infoPaginaPre) => {
      this.cargada_pre = true
      this.pre = resp;
    })
  }
  private cargarBasico() {
    this.hhtp.get('assets/data/data-basico.json').subscribe((resp: infoPaginaPre) => {
      this.cargada_basico = true
      this.basico = resp;
    })
  }
  private cargartercero(){
    this.hhtp.get('assets/data/data-tercero.json').subscribe((resp:infoPaginaPre) =>{
     this.cargada_escolar=true
     this.escolar=resp;
   })
  }
  private cargarIntensivo(){
    this.hhtp.get('assets/data/data-intensivo.json').subscribe((resp:infoPaginaPre) =>{
     this.cargada_intensivo=true
     this.intensivo=resp;
   })
  }
}