import {Component, OnInit} from '@angular/core';
import {LoginService} from '../../shared/services/login.service';
import {ModalWindowService} from '../../shared/services/modal-window.service';
import {UserModel} from '../../shared/models/users.model';
import {UsersService} from '../../shared/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: string = '';
  password: string = '';

  loginReg:string = '';
  passwordReg:string = '';

  checkUser: boolean = undefined;

  constructor(public loginService: LoginService,
              public modalWindowService: ModalWindowService,
              private usersService: UsersService) {}

  ngOnInit(): void {
    this.usersService.getUsers();
  }

  registrationModalWindow() {
    const modal = document.querySelector('#modal__window__reg');
    modal.classList.add('show');
  }

  registration() {
    this.checkUser = true;
    const user: UserModel = {login: this.loginReg, password: this.passwordReg, type: 'user'};

    for (let prop in this.usersService.users) {
      if (prop === this.loginReg)
        this.checkUser = false;
    }

    if (this.checkUser) {
      this.usersService.createUser(user).subscribe(() => this.usersService.getUsers(), err => console.error(err));
      this.loginReg = '';
      this.passwordReg = '';
    }
  }
}
