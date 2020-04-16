import {Component, OnInit} from '@angular/core';
import {RecordService} from '../../../shared/services/record.service';
import {DoctorsService} from '../../../shared/services/doctors.service';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class RecordComponent implements OnInit {

  dd: string = '';
  selectDocFam: string = '';
  selectTime: string = '';
  patient: string = '';

  checkRecord: boolean = false;
  flagFreeTime: boolean = false;

  time = ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00'];
  freeTime = [];

  constructor(public recordService: RecordService,
              public doctorsService: DoctorsService) {}

  ngOnInit(): void {
    this.doctorsService.getDoctors();
    this.dd = this.recordService.selectDay;
    this.recordService.check = false;
  }

  addRecord() {
    if (this.recordService.msDayNow > this.recordService.msDaySelect) {
      alert('Нельзя записывать на прошедшую дату!');
    } else {
      this.recordService.addRecord(this.selectDocFam, this.dd, this.patient, this.selectTime);

      this.checkRecord = true;
      this.selectDocFam = '';
      this.selectTime = '';
      this.patient = '';
    }
  }

  checkFreeTime() {
    let busyTime = [];
    this.freeTime = [];

    for (let doc in this.doctorsService.doctors) {
      if (doc === this.selectDocFam) {
        for (let keyDoc in this.doctorsService.doctors[doc]) {
          for (let day in this.doctorsService.doctors[doc][keyDoc].records) {
            if (day === this.dd) {
              for (let time in this.doctorsService.doctors[doc][keyDoc].records[day]) {
                busyTime.push(time);
              }
            }
          }
        }
      }
    }

    if (busyTime.length) {
      this.freeTime = this.time.filter(item => {
        for (let element of busyTime) {
          if (item === element) {
            this.flagFreeTime = false;
            break;
          } else if (item !== element) {
            this.flagFreeTime = true;
          }
        }
        if (this.flagFreeTime)
          return true;
        else if (!this.flagFreeTime)
          return false;
      });
    } else if (!busyTime.length) {
      this.freeTime = this.freeTime.concat(this.time);
    }

    console.log('time - ', this.time);
    console.log('busyTime - ', busyTime);
    console.log('freeTime - ', this.freeTime);
  }
}
