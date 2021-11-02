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
  tercero: infoPaginaPre = {};
  cuarto: infoPaginaPre = {};
  quinto: infoPaginaPre = {};
  intensivo: infoPaginaPre = {};
  intensivo1: infoPaginaPre = {};
  intensivo2: infoPaginaPre = {};
  cargada = false;
  cargada_pre = false;
  cargada_basico = false;
  cargada_escolar = false;
  cargada_intensivo = false;
  constructor(private hhtp: HttpClient) {
    this.cargarEventos();
    this.cargarPre();
    this.cargarBasico();
    this.cargarTercero();
    this.cargarCuarto();
    this.cargarQuinto();
    this.cargarIntensivo();
    this.cargarIntensivo1();
    this.cargarIntensivo2();

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
  private cargarTercero(){
    this.hhtp.get('assets/data/data-tercero.json').subscribe((resp:infoPaginaPre) =>{
     this.cargada_escolar=true
     this.tercero=resp;
   })
  }
  private cargarCuarto(){
    this.hhtp.get('assets/data/data-cuarto.json').subscribe((resp:infoPaginaPre) =>{
     this.cargada_escolar=true
     this.cuarto=resp;
   })
  }
  private cargarQuinto(){
    this.hhtp.get('assets/data/data-quinto.json').subscribe((resp:infoPaginaPre) =>{
     this.cargada_escolar=true
     this.quinto=resp;
   })
  }
  private cargarIntensivo1(){
    this.hhtp.get('assets/data/data-intensivo1.json').subscribe((resp:infoPaginaPre) =>{
     this.cargada_escolar=true
     this.intensivo1=resp;
   })
  }
  private cargarIntensivo2(){
    this.hhtp.get('assets/data/data-intensivo2.json').subscribe((resp:infoPaginaPre) =>{
     this.cargada_escolar=true
     this.intensivo2=resp;
   })
  }
  private cargarIntensivo(){
    this.hhtp.get('assets/data/data-intensivo.json').subscribe((resp:infoPaginaPre) =>{
     this.cargada_intensivo=true
     this.intensivo=resp;
   })
  }
}