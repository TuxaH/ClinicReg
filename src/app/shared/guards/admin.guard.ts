import {Injectable} from '@angular/core';
import {CanActivate, Router, UrlTree} from '@angular/router';
import {LoginService} from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private loginService: LoginService,
              private router: Router) {}

  canActivate(): boolean | UrlTree {
    return this.loginService.cAdmin() || this.router.createUrlTree(['/', 'home']);
  }
}
