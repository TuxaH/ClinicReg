import {Component, OnInit} from '@angular/core';
import {UsersService} from '../../../shared/services/users.service';
import {UserModel} from '../../../shared/models/users.model';
import {ModalWindowService} from '../../../shared/services/modal-window.service';

@Component({
  selector: 'app-users-add',
  templateUrl: './users-add.component.html'
})
export class UsersAddComponent implements OnInit {

  login: string = '';
  password: string = '';
  nameFirst: string = '';
  nameLast: string = '';
  type: string = '';

  checkUser: boolean;

  typeUsers = ['admin', 'worker', 'user'];

  constructor(private usersService: UsersService,
              public modalWindowService: ModalWindowService) {}

  ngOnInit(): void {
    this.usersService.getUsers();
  }

  createNewUser() {
    if (this.nameFirst.length >= 3 && this.nameLast.length >= 3 && this.login.length >= 3 && this.password !== '' && this.type !== '') {
      const modal = document.querySelector('.modal');

      this.checkUser = true;
      const user: UserModel = {
        nameFirst: this.nameFirst,
        nameLast: this.nameLast,
        login: this.login,
        password: this.password,
        type: this.type
      };

      for (let prop in this.usersService.users) {
        if (prop === this.login)
          this.checkUser = false;
      }

      if (this.checkUser) {
        modal.classList.add('show');

        this.usersService.createUser(user).subscribe(() => this.usersService.getUsers(), err => console.error(err));
        this.nameFirst = '';
        this.nameLast = '';
        this.login = '';
        this.password = '';
        this.type = '';
      } else if (!this.checkUser)
        modal.classList.add('show');
    }
  }
}
