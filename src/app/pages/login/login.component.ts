import {Component} from '@angular/core';
import {LoginService} from '../../shared/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  login: string = '';
  password: string = '';

  constructor(public loginService: LoginService) {}
}
