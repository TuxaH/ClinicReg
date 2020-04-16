import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoctorsComponent } from './doctors.component';
import {DoctorsListComponent} from './doctors-list/doctors-list.component';
import {DoctorsAddComponent} from './doctors-add/doctors-add.component';
import {DoctorsListRecordsComponent} from './doctors-list-records/doctors-list-records.component';
import {DoctorsPositionsComponent} from './doctors-positions/doctors-positions.component';

const routes: Routes =
  [
    { path: '', component: DoctorsComponent, children: [
        { path: '', redirectTo: 'list', pathMatch: 'full'},
        { path: 'list', pathMatch: 'full', component: DoctorsListComponent },
        { path: 'add', pathMatch: 'full', component: DoctorsAddComponent },
        { path: 'records', pathMatch: 'full', component: DoctorsListRecordsComponent },
        { path: 'positions', pathMatch: 'full', component: DoctorsPositionsComponent }
    ]}
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorsRoutingModule { }
