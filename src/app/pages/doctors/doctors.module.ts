import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorsRoutingModule } from './doctors-routing.module';
import { DoctorsComponent } from './doctors.component';
import { DoctorsListComponent } from './doctors-list/doctors-list.component';
import { DoctorsAddComponent } from './doctors-add/doctors-add.component';
import {FormsModule} from '@angular/forms';
import { DoctorsListRecordsComponent } from './doctors-list-records/doctors-list-records.component';
import {DirectivesAndPipesModule} from '../../shared/modules/directives-and-pipes.module';
import { DoctorsPositionsComponent } from './doctors-positions/doctors-positions.component';

@NgModule({
  declarations: [
    DoctorsComponent,
    DoctorsListComponent,
    DoctorsAddComponent,
    DoctorsListRecordsComponent,
    DoctorsPositionsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DoctorsRoutingModule,
    DirectivesAndPipesModule
  ],
  exports: []
})
export class DoctorsModule { }
