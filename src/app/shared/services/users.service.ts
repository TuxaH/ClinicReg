import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserModel} from '../models/users.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users;

  static url: string = 'https://angular-organaizer.firebaseio.com';

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get(`${UsersService.url}/users.json`).subscribe(data => this.users = data);
  }

  createUser(user: UserModel): Observable<UserModel> {
    return this.http
      .post<any>(`${UsersService.url}/users/${user.login}.json`, user)
  }

  removeUser(user): Observable<void> {
    return this.http
      .delete<void>(`${UsersService.url}/users/${user}.json`);
  }
}
