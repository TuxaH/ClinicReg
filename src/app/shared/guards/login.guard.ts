import {CanActivate, Router, UrlTree} from '@angular/router';
import {Injectable} from '@angular/core';
import {LoginService} from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private loginService: LoginService,
              private router: Router) {}

  canActivate(): boolean | UrlTree {
    return this.loginService.isLoggedIn() || this.router.createUrlTree(['/', 'login']);
  }
}
