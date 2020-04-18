import { Component, OnInit } from '@angular/core';
import {DoctorsService} from '../../../shared/services/doctors.service';

@Component({
  selector: 'app-my-records',
  templateUrl: './my-records.component.html',
  styleUrls: ['./my-records.component.css']
})
export class MyRecordsComponent implements OnInit {

  name: string = '';

  constructor(public doctorsService: DoctorsService) {}

  ngOnInit(): void {
    this.doctorsService.getDoctors();

    this.name = localStorage.getItem('user_nameFirst') + ' ' + localStorage.getItem('user_nameLast');
  }

  removeRecord(doctor, docKey, day, time) {
    const rem = confirm(`Delete record ${doctor} (${day} - ${time}) ?`);

    if (rem) {
      this.doctorsService.removeRecord(doctor, docKey, day, time).subscribe(() => this.doctorsService.getDoctors(), err => console.error(err));
    }
  }
}
