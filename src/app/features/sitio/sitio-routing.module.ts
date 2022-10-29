import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoggedInGuard } from 'src/app/core/guards/logged-in.guard';
import { SitioComponent } from './pages/sitio/sitio.component';
import { SitiosComponent } from './pages/sitios/sitios.component';
import { ScoreComponent } from './pages/score/score.component';
import { ScoresComponent } from './pages/scores/scores.component';
import {OfertaComponent} from './pages/oferta/oferta.component';

const routes: Routes = [
    {
        path: '', component: SitiosComponent
    },
    {
        path: 'sitios', children: [
            {
                path: ':id', component: SitioComponent
            }
        ]
    },
  {
    path: 'oferta', children: [
      {
        path: ':id', component: OfertaComponent
      }
    ]
  },
    {
        path: 'scores', canActivate: [LoggedInGuard], children: [
            {
                path: '', component: ScoresComponent
            },
            {
                path: ':id', component: ScoreComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SitioRoutingModule { }
