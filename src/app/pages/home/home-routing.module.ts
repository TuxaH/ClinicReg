import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import {CalendarComponent} from './calendar/calendar.component';
import {RecordComponent} from './record/record.component';

const routes: Routes =
  [
    { path: '', component: HomeComponent, children: [
        { path: '', redirectTo: 'calendar', pathMatch: 'full' },
        { path: 'calendar', pathMatch: 'full', component: CalendarComponent },
        { path: 'record', pathMatch: 'full', component: RecordComponent }
      ] },
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
