import { Component } from '@angular/core';
import {LoginService} from '../../shared/services/login.service';

@Component({
  selector: 'app-home',
  template: `<div class="nav__page">
               <a routerLink="/home/calendar" routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}">Calendar</a>
               <a routerLink="/home/record" routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}">Record</a>
               <a *ngIf="loginService.checkNormalUser" routerLink="/home/my-records" routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}">My records</a>
             </div>
             <router-outlet></router-outlet>`
})
export class HomeComponent {

  constructor(public loginService: LoginService) {}
}
