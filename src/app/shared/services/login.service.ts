import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {UsersService} from './users.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  checkUser: boolean = true;
  checkAdmin: boolean;
  loginUser: string;
  userType: string;

  constructor(private router: Router,
              private usersService: UsersService) {
    this.usersService.getUsers();
  }

  login(login: string, password: string) {
    this.usersService.getUsers();

    this.checkUser = false;

    if (login.length >= 3) {
      if (password.length != 0) {
        for (let prop in this.usersService.users) {
          for (let k in this.usersService.users[prop]) {
            if (this.usersService.users[prop][k].login === login && this.usersService.users[prop][k].password === password) {
              this.loginUser = this.usersService.users[prop][k].login;
              this.userType = this.usersService.users[prop][k].type;
              localStorage.setItem('user_key', this.usersService.users[prop][k].login);
              localStorage.setItem('user_type', this.usersService.users[prop][k].type);
              this.checkUser = true;
              this.router.navigate(['/', 'home']);
            }
          }
        }
      }
    }
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('user_key');
  }

  cAdmin() {
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
    if (this.checkAdmin === false)
      return false;
    else if (this.checkAdmin === true)
      return true;
  }

  logout() {
    localStorage.removeItem('user_key');
    localStorage.removeItem('user_type');
    this.router.navigate(['/', 'login']);
  }
}
