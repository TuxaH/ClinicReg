import {Injectable} from '@angular/core';
import {DoctorsService} from './doctors.service';

@Injectable({
  providedIn: 'root'
})
export class RecordService {

  check: boolean;

  idDoc: string = '';

  constructor(private doctorsService: DoctorsService) {}

  selectDay: string;
  msDaySelect: number;
  msDayNow: number;

  addRecord(doctor, day, patient, time) {
    const record = {[time]: patient};

    for (let item in this.doctorsService.doctors) {
      if (doctor === item) {
        for (let item2 in this.doctorsService.doctors[item]) {
          this.idDoc = item2;
        }
      }
    }

    this.doctorsService.addRecord(this.idDoc, doctor, day, time, record).subscribe(() => this.doctorsService.getDoctors(), err => console.error(err));
  }
}
