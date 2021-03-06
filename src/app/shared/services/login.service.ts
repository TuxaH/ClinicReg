import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {UsersService} from './users.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  checkUser: boolean = true;
  checkAdmin: boolean;
  checkNormalUser: boolean;
  loginUser: string;
  nameFirst: string;
  nameLast: string;
  userType: string;

  constructor(private router: Router,
              private usersService: UsersService) {
    this.usersService.getUsers();
  }

  login(login: string, password: string) {
    const modal = document.querySelector('.modal');

    this.usersService.getUsers();

    this.checkUser = false;

    if (login.length >= 3) {
      if (password.length != 0) {
        for (let prop in this.usersService.users) {
          for (let k in this.usersService.users[prop]) {
            if (this.usersService.users[prop][k].login === login && this.usersService.users[prop][k].password === password) {
              this.loginUser = this.usersService.users[prop][k].login;
              this.nameFirst = this.usersService.users[prop][k].nameFirst;
              this.nameLast = this.usersService.users[prop][k].nameLast;
              this.userType = this.usersService.users[prop][k].type;
              localStorage.setItem('user_key', this.usersService.users[prop][k].login);
              localStorage.setItem('user_type', this.usersService.users[prop][k].type);
              localStorage.setItem('user_nameFirst', this.usersService.users[prop][k].nameFirst);
              localStorage.setItem('user_nameLast', this.usersService.users[prop][k].nameLast);
              this.checkUser = true;
              this.router.navigate(['/', 'home']);
            } else {
              modal.classList.add('show');
            }
          }
        }
      }
    }
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('user_key');
  }

  cUser() {
    for (let prop in this.usersService.users) {
      for (let k in this.usersService.users[prop]) {
        if (this.usersService.users[prop][k].login === localStorage.getItem('user_key')) {
          if (this.usersService.users[prop][k].type === 'admin') {
            this.checkAdmin = true;
          } else if (this.usersService.users[prop][k].type !== 'admin') {
            this.checkAdmin = false;
          }
        }
      }
    }
    if (!this.checkAdmin)
      return false;
    else if (this.checkAdmin)
      return true;
  }

  cNormalUser() {
    for (let prop in this.usersService.users) {
      for (let k in this.usersService.users[prop]) {
        if (this.usersService.users[prop][k].login === localStorage.getItem('user_key')) {
          if (this.usersService.users[prop][k].type === 'user') {
            this.checkNormalUser = true;
          } else if (this.usersService.users[prop][k].type !== 'user') {
            this.checkNormalUser = false;
          }
        }
      }
    }
    if (this.checkNormalUser === false)
      return true;
    else if (this.checkNormalUser === true)
      return false;
  }

  check() {
    const userType = localStorage.getItem('user_type');
    if (userType === 'user')
      return true
    else if (userType !== 'user')
      return false
  }

  logout() {
    localStorage.removeItem('user_key');
    localStorage.removeItem('user_type');
    localStorage.removeItem('user_nameFirst');
    localStorage.removeItem('user_nameLast');
    this.router.navigate(['/', 'login']);
  }
}
