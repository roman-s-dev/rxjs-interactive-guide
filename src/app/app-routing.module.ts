import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FromEventComponent } from './pages/creation/from-event/from-event.component';
import { FromComponent } from './pages/creation/from/from.component';
import { IntervalComponent } from './pages/creation/interval/interval.component';
import { InDevelopementComponent } from './pages/in-developement/in-developement.component';

const creation: Routes = [
  {
    path: 'interval',
    component: IntervalComponent,
  },
  {
    path: 'from',
    component: FromComponent,
  },
  {
    path: 'fromEvent',
    component: FromEventComponent,
  },
];

const routes: Routes = [
  ...creation,
  {
    path: '**',
    component: InDevelopementComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
