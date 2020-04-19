import {Injectable} from '@angular/core';
import {CanActivate, Router, UrlTree} from '@angular/router';
import {LoginService} from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class MyRecordsGuard implements CanActivate {

  constructor(private router: Router,
              private loginService: LoginService) {}

  canActivate(): boolean | UrlTree {
    return this.loginService.check() || this.router.createUrlTree(['/', 'home']);
  }
}
