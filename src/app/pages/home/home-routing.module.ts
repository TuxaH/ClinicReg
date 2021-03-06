import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import {CalendarComponent} from './calendar/calendar.component';
import {RecordComponent} from './record/record.component';
import {MyRecordsComponent} from './my-records/my-records.component';
import {MyRecordsGuard} from '../../shared/guards/my-records.guard';

const routes: Routes =
  [
    { path: '', component: HomeComponent, children: [
        { path: '', redirectTo: 'calendar', pathMatch: 'full' },
        { path: 'calendar', pathMatch: 'full', component: CalendarComponent },
        { path: 'record', pathMatch: 'full', component: RecordComponent },
        { path: 'my-records', pathMatch: 'full', component: MyRecordsComponent, canActivate: [MyRecordsGuard] }
      ] },
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
