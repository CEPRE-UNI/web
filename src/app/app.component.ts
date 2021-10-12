import { Component,OnInit } from '@angular/core';
import { InfoPaginaService } from './services/info-pagina.service';
import { NavigationEnd, Router} from '@angular/router';
import { filter } from 'rxjs/operators';

declare var $:JQueryStatic;
declare var gtag;
export var jQuery: any = window["jQuery"];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  { 
  title='analitics';
    constructor(public _infoPaginaServices: InfoPaginaService, router: Router){
       const navEndEvent$ = router.events.pipe(filter(event =>event instanceof NavigationEnd)
       );
       navEndEvent$.subscribe((e: NavigationEnd) => {
        gtag('config', 'G-8NNVMQP8HZ', {
            'page_path':e.urlAfterRedirects});
      });
    } 
}