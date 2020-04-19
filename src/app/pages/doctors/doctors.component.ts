import { Component } from '@angular/core';

@Component({
  selector: 'app-doctors',
  template: `<div class="nav__page">
               <a routerLink="/doctors/list" routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}">List</a>
               <a routerLink="/doctors/add" routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}">Add</a>
               <a routerLink="/doctors/records" routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}">List Records</a>
               <a routerLink="/doctors/positions" routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}">Positions</a>
             </div>
             <router-outlet></router-outlet>`
})
export class DoctorsComponent {}
