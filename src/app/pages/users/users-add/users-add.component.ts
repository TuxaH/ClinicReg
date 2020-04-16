import {Component, OnInit} from '@angular/core';
import {UsersService} from '../../../shared/services/users.service';
import {UserModel} from '../../../shared/models/users.model';

@Component({
  selector: 'app-users-add',
  templateUrl: './users-add.component.html',
  styleUrls: ['./users-add.component.css']
})
export class UsersAddComponent implements OnInit {

  login: string;
  password: string;
  type: string;

  checkUser: boolean;

  typeUsers = ['admin', 'worker', 'user'];

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.usersService.getUsers();
  }

  createNewUser() {
    this.checkUser = true;
    const user: UserModel = {login: this.login, password: this.password, type: this.type};

    for (let prop in this.usersService.users) {
      if (prop === this.login)
        this.checkUser = false;
    }

    if (this.checkUser === true) {
      this.usersService.createUser(user).subscribe(null, err => console.error(err));
      this.login = '';
      this.password = '';
      this.type = '';
    }
  }
}
