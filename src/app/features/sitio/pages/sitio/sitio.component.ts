import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {Sitio} from 'src/app/data/models/sitio';
import {SitiosService} from 'src/app/data/services/sitios.service';
import {switchMap} from 'rxjs/operators';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Answer} from 'src/app/data/models/answer';

@Component({
  selector: 'app-sitio',
  templateUrl: './sitio.component.html',
  styleUrls: ['./sitio.component.css']
})
export class SitioComponent implements OnInit, OnDestroy {
  sitio!: Sitio;
  sitioId = 0;



  private sitioSub!: Subscription;
  verContactar = false;

  constructor(
    private sitioService: SitiosService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnDestroy(): void {
    this.sitioSub.unsubscribe();
  }

  ngOnInit(): void {
    this.sitioSub = this.route.paramMap.pipe(
      switchMap(params => {
        this.sitioId = Number(params.get('id'));
        return this.sitioService.getSitio(this.sitioId);
      })
    ).subscribe(
      sitio => {
        this.sitio = sitio;
      }
    );
  }
}
