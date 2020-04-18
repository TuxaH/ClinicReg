import {Component, OnInit} from '@angular/core';
import {DoctorsService} from '../../../shared/services/doctors.service';
import {ModalWindowService} from '../../../shared/services/modal-window.service';

@Component({
  selector: 'app-doctors-list-records',
  templateUrl: './doctors-list-records.component.html',
  styleUrls: ['./doctors-list-records.component.css']
})
export class DoctorsListRecordsComponent implements OnInit {

  constructor(public doctorsService: DoctorsService,
              public modalWindowService: ModalWindowService) {}

  ngOnInit(): void {
    this.doctorsService.getDoctors();
  }

  removeRecord(doctor, docKey, day, time) {
    this.doctorsService.removeRecord(doctor, docKey, day, time).subscribe(() => this.doctorsService.getDoctors(), err => console.error(err));
    this.modalWindowService.closeConfirm();
  }
}
