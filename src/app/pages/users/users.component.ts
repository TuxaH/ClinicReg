import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  template: `<div class="nav__page">
              <a routerLink="/users/list" routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}">List</a>
              <a routerLink="/users/add" routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}">Add</a>
             </div>
             <router-outlet></router-outlet>`
})
export class UsersComponent {}
