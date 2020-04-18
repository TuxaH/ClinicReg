import {Component, OnInit} from '@angular/core';
import {UsersService} from '../../../shared/services/users.service';
import {ModalWindowService} from '../../../shared/services/modal-window.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  login: string;

  constructor(public usersService: UsersService,
              public modalWindowService: ModalWindowService) {}

  ngOnInit(): void {
    this.usersService.getUsers();
  }

  remove(item) {
    this.usersService.removeUser(item).subscribe(() => this.usersService.getUsers(), err => console.error(err));
    this.modalWindowService.closeConfirm();
  }
}
