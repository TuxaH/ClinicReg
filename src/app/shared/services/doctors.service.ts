import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {DoctorsModel} from '../models/doctors.model';

@Injectable({
  providedIn: 'root'
})
export class DoctorsService {

  doctors;

  static url: string = 'https://angular-organaizer.firebaseio.com';

  constructor(private http: HttpClient) {}

  getDoctors() {
    return this.http.get(`${DoctorsService.url}/doctors.json`).subscribe(data => this.doctors = data);
  }

  createDoctor(doctor: DoctorsModel): Observable<DoctorsModel> {
    return this.http
      .post<DoctorsModel>(`${DoctorsService.url}/doctors/${doctor.position} ${doctor.lastName} ${doctor.firstName} ${doctor.patronymic}.json`, doctor)
  }

  removeDoctor(doctor: DoctorsModel): Observable<DoctorsModel> {
    return this.http
      .delete<DoctorsModel>(`${DoctorsService.url}/doctors/${doctor}.json`);
  }

  addRecord(idDoc, doc, day, time, record): Observable<any> {
    return this.http
      .post<any>(`${DoctorsService.url}/doctors/${doc}/${idDoc}/records/${day}/${time}.json`, record);
  }

  removeRecord(doctor, docKey, day, time): Observable<void> {
    return this.http
      .delete<void>(`${DoctorsService.url}/doctors/${doctor}/${docKey}/records/${day}/${time}.json`);
  }
}
