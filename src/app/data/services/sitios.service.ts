import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Sitio } from '../models/sitio';
import { NormalizationService } from './normalization.service';
import {Oferta} from '../models/oferta';

interface StrapiResponse {
  data: any;
}

@Injectable({
  providedIn: 'root'
})
export class SitiosService {
  private url = `${environment.strapiUrl}/sitios`;
  private populateQuestionsParam = { params: new HttpParams().set('populate', '*') };

  constructor(private http: HttpClient, private ns: NormalizationService) { }

  getSitios(): Observable<Sitio[]> {
    return this.http.get<StrapiResponse>(
      this.url,
    )
      .pipe(this.ns.restructureArrayedAttributes());
  }

  getSitio(id: number): Observable<Sitio> {
    return this.http.get<StrapiResponse>(`${this.url}/${id}`,
      this.populateQuestionsParam
    )
      .pipe(
        this.ns.restructureAttributes(['imagenes', 'ofertas'])
      );
  }
  getOferta(id: number): Observable<Oferta> {
    return this.http.get<StrapiResponse>(`${environment.strapiUrl}/ofertas/${id}`,
      this.populateQuestionsParam
    )
      .pipe(
        this.ns.restructureAttributes(['imagenes', ])
      );
  }
}
