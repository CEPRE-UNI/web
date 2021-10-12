import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';

import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { CepreuniComponent } from './pages/cepreuni/cepreuni.component';
import { PreComponent } from './pages/ciclos/pre/pre.component';
import { BasicoComponent } from './pages/ciclos/basico/basico.component';
import { ExamenesComponent } from './pages/descargas/examenes/examenes.component';
import { InfografiaComponent } from './pages/descargas/infografia/infografia.component';
import { BibliografiaComponent } from './pages/descargas/bibliografia/bibliografia.component';
import { PsicologiaComponent } from './pages/servicios/psicologia/psicologia.component';
import { BlibliotecaComponent } from './pages/servicios/bliblioteca/bliblioteca.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { WebinarComponent } from './pages/descargas/webinar/webinar.component';
import { AppRoutingModule } from './app-routing.module';
import { APP_BASE_HREF } from '@angular/common';
import { WebgrafiaComponent } from './pages/descargas/webgrafia/webgrafia.component';
import { EscolarComponent } from './pages/ciclos/escolar/escolar.component';
import { IntensivoComponent } from './pages/ciclos/intensivo/intensivo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CepreuniComponent,
    PreComponent,
    BasicoComponent,
    ExamenesComponent,
    InfografiaComponent,
    BibliografiaComponent,
    PsicologiaComponent,
    BlibliotecaComponent,
    ContactoComponent,
    WebinarComponent,
    WebgrafiaComponent,
    EscolarComponent,
    IntensivoComponent,
    
  ],
  imports: [
    BrowserModule,
    CarouselModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
