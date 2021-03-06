import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserModel} from '../models/users.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users = {};

  static url: string = 'https://clinicreg-f7471.firebaseio.com';

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get(`${UsersService.url}/users.json`).subscribe(data => this.users = data);
  }

  createUser(user: UserModel): Observable<UserModel> {
    return this.http
      .post<any>(`${UsersService.url}/users/${user.login}.json`, user)
  }

  removeUser(user: UserModel): Observable<UserModel> {
    return this.http
      .delete<UserModel>(`${UsersService.url}/users/${user}.json`);
  }
}
