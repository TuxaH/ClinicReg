import {Component, OnInit} from '@angular/core';
import {DoctorsService} from '../../../shared/services/doctors.service';
import {ModalWindowService} from '../../../shared/services/modal-window.service';

@Component({
  selector: 'app-doctors-list',
  templateUrl: './doctors-list.component.html',
  styleUrls: ['./doctors-list.component.css']
})
export class DoctorsListComponent implements OnInit {

  constructor(public doctorsService: DoctorsService,
              public modalWindowService: ModalWindowService) {}

  ngOnInit(): void {
    this.doctorsService.getDoctors();
  }

  remove(doctor) {
    this.doctorsService.removeDoctor(doctor).subscribe(() => this.doctorsService.getDoctors(), err => console.error(err));
    this.modalWindowService.closeConfirm();
  }
}
