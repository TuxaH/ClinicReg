import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersAddComponent } from './users-add/users-add.component';
import {FormsModule} from '@angular/forms';
import {DirectivesAndPipesModule} from '../../shared/modules/directives-and-pipes.module';


@NgModule({
  declarations: [
    UsersComponent,
    UsersListComponent,
    UsersAddComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    UsersRoutingModule,
    DirectivesAndPipesModule
  ]
})
export class UsersModule { }
