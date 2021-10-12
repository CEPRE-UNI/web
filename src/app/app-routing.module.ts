import { NgModule } from '@angular/core';
import { NavigationEnd, Router, RouterModule, Routes } from '@angular/router';
import { filter } from 'rxjs/operators';



import { HomeComponent } from './pages/home/home.component';
import { CepreuniComponent } from './pages/cepreuni/cepreuni.component';
import { PreComponent } from './pages/ciclos/pre/pre.component';
import { BasicoComponent } from './pages/ciclos/basico/basico.component';
import { ExamenesComponent } from './pages/descargas/examenes/examenes.component';
import { InfografiaComponent } from './pages/descargas/infografia/infografia.component';
import { BibliografiaComponent } from './pages/descargas/bibliografia/bibliografia.component';
import { WebinarComponent } from './pages/descargas/webinar/webinar.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { WebgrafiaComponent } from './pages/descargas/webgrafia/webgrafia.component';
import { PsicologiaComponent } from './pages/servicios/psicologia/psicologia.component';
import { BlibliotecaComponent } from './pages/servicios/bliblioteca/bliblioteca.component';
import { IntensivoComponent } from './pages/ciclos/intensivo/intensivo.component';
import { EscolarComponent } from './pages/ciclos/escolar/escolar.component';

const app_routes:Routes=[
    {path: '', component: HomeComponent},
    {path: 'cepreuni', component: CepreuniComponent},
    {path: 'pre', component: PreComponent },
    {path: 'basico', component: BasicoComponent},
    {path: 'intensivo', component: IntensivoComponent},
    {path: 'escolar', component: EscolarComponent},
    {path: 'examenes', component: ExamenesComponent},
    {path: 'infografia', component: InfografiaComponent},
    {path: 'bibliografia', component: BibliografiaComponent},
    {path: 'webinar', component: WebinarComponent},
    {path: 'webgrafia', component: WebgrafiaComponent},
    {path: 'contacto', component: ContactoComponent},
    {path: 'psicologia', component: PsicologiaComponent},
    {path: 'biblioteca', component: BlibliotecaComponent},
    {path: '**', pathMatch: 'full', redirectTo:'/'}
];

@NgModule({
    imports:[
        RouterModule.forRoot(app_routes, {useHash:true})
        // RouterModule.forRoot( app_routes)
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule{
    
}