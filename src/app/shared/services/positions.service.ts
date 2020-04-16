import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PositionsService {

  static url: string = 'https://angular-organaizer.firebaseio.com';
  positionsObj = {};
  positions = [];

  constructor(private http: HttpClient) {}

  getPositions() {
    return this.http.get(`${PositionsService.url}/positions.json`).subscribe(data => {
      this.positionsObj = data;
      this.positions = [];
      for (let item in this.positionsObj) {
        this.positions.push(item)
      }
    });
  }

  addPosition(position, pos): Observable<any> {
    return this.http
      .post<any>(`${PositionsService.url}/positions/${position}.json`, pos);
  }

  removePosition(pos): Observable<void> {
    return this.http.delete<void>(`${PositionsService.url}/positions/${pos}.json`);
  }

}
