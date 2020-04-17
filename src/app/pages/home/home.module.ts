import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SelectorComponent } from './selector/selector.component';
import {RecordComponent} from './record/record.component';
import {CalendarComponent} from './calendar/calendar.component';
import {FormsModule} from '@angular/forms';
import {DirectivesAndPipesModule} from '../../shared/modules/directives-and-pipes.module';
import { MyRecordsComponent } from './my-records/my-records.component';

@NgModule({
    declarations: [
      HomeComponent,
      SelectorComponent,
      RecordComponent,
      CalendarComponent,
      MyRecordsComponent
    ],
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutingModule,
    DirectivesAndPipesModule
  ],
  providers: []
})
export class HomeModule {}
