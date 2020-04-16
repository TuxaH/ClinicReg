import {Component, OnInit} from '@angular/core';
import {UsersService} from '../../../shared/services/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  login: string;

  constructor(public usersService: UsersService) {}

  ngOnInit(): void {
    this.usersService.getUsers();
  }

  remove(user) {
    const rem = confirm(`Delete user ${user} ?`);
    if (rem) {
      this.usersService.removeUser(user).subscribe(() => this.usersService.getUsers(), err => console.error(err));
    }
  }
}
