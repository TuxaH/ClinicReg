import {Component} from '@angular/core';
import {LoginService} from '../../shared/services/login.service';
import {ModalWindowService} from '../../shared/services/modal-window.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  login: string = '';
  password: string = '';

  constructor(public loginService: LoginService,
              public modalWindowService: ModalWindowService) {}
}
