import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { SitiosService } from 'src/app/data/services/sitios.service';
import {switchMap} from 'rxjs/operators';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-sitios',
  templateUrl: './sitios.component.html',
  styleUrls: ['./sitios.component.css']
})
export class SitiosComponent {
  sitios$ = this.sitiosService.getSitios();

  constructor(
    private sitiosService: SitiosService,
    public auth: AuthenticationService
  ) { }
  ngOnInit(): void {
    this.sitios$.subscribe(
      sitios => {
        console.log(sitios);
      }
    );
  }
}
