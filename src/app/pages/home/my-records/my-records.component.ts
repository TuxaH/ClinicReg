import { Component, OnInit } from '@angular/core';
import {DoctorsService} from '../../../shared/services/doctors.service';
import {ModalWindowService} from '../../../shared/services/modal-window.service';

@Component({
  selector: 'app-my-records',
  templateUrl: './my-records.component.html',
  styleUrls: ['./my-records.component.css']
})
export class MyRecordsComponent implements OnInit {

  name: string = '';

  constructor(public doctorsService: DoctorsService,
              public modalWindowService: ModalWindowService) {}

  ngOnInit(): void {
    this.doctorsService.getDoctors();

    this.name = localStorage.getItem('user_nameFirst') + ' ' + localStorage.getItem('user_nameLast');
  }

  removeRecord(doctor, docKey, day, time) {
    this.doctorsService.removeRecord(doctor, docKey, day, time).subscribe(() => this.doctorsService.getDoctors(), err => console.error(err));
    this.modalWindowService.closeConfirm();
  }
}
