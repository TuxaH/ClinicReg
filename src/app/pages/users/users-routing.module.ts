import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users.component';
import {UsersListComponent} from './users-list/users-list.component';
import {UsersAddComponent} from './users-add/users-add.component';

const routes: Routes =
  [
      { path: '', component: UsersComponent, children: [
        { path: '', redirectTo: 'list', pathMatch: 'full'},
        { path: 'list', pathMatch: 'full', component: UsersListComponent },
        { path: 'add', pathMatch: 'full', component: UsersAddComponent }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
