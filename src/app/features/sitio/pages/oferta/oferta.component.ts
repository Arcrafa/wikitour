import {Component, OnInit} from '@angular/core';
import {Sitio} from '../../../../data/models/sitio';
import {Subscription} from 'rxjs';
import {SitiosService} from '../../../../data/services/sitios.service';
import {ActivatedRoute, Router} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {Oferta} from '../../../../data/models/oferta';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css']
})
export class OfertaComponent implements OnInit {

  oferta!: Oferta;
  ofertaId = 0;

  private ofertaSub!: Subscription;

  constructor(
    private sitioService: SitiosService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnDestroy(): void {
    this.ofertaSub.unsubscribe();
  }

  ngOnInit(): void {
    this.ofertaSub = this.route.paramMap.pipe(
      switchMap(params => {
        this.ofertaId = Number(params.get('id'));
        return this.sitioService.getOferta(this.ofertaId);
      })
    ).subscribe(
      oferta => {
        this.oferta = oferta;
        console.log(this.oferta);
      }
    );
  }
}
