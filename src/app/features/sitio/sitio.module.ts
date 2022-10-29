import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionComponent } from './components/question/question.component';
import { SitiosComponent } from './pages/sitios/sitios.component';
import { ScoreComponent } from './pages/score/score.component';
import { SitioComponent } from './pages/sitio/sitio.component';
import { SitioRoutingModule } from './sitio-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { ScoresComponent } from './pages/scores/scores.component';
import { CoreModule } from 'src/app/core/core.module';
import { OfertaComponent } from './pages/oferta/oferta.component';

@NgModule({
  declarations: [
    QuestionComponent,
    SitiosComponent,
    SitioComponent,
    ScoreComponent,
    ScoresComponent,
    OfertaComponent
  ],
  imports: [
    CommonModule,
    SitioRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    CoreModule
  ]
})
export class SitioModule { }
