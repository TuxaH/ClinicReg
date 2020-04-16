import {Component, OnInit} from '@angular/core';
import {LoginService} from '../shared/services/login.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(public loginService: LoginService) {}

  ngOnInit(): void {
    this.loginService.loginUser = localStorage.getItem('user_key');
    this.loginService.userType = localStorage.getItem('user_type');
  }
}
