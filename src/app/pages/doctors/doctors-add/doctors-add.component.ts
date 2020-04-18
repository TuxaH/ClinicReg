import {Component, OnInit} from '@angular/core';
import {DoctorsService} from '../../../shared/services/doctors.service';
import {PositionsService} from '../../../shared/services/positions.service';
import {ModalWindowService} from '../../../shared/services/modal-window.service';

@Component({
  selector: 'app-doctors-add',
  templateUrl: './doctors-add.component.html',
  styleUrls: ['./doctors-add.component.css']
})
export class DoctorsAddComponent implements OnInit {

  firstName: string = '';
  patronymic: string = '';
  lastName: string = '';
  position: string = '';

  checkDoc: boolean;

  constructor(private doctorsService: DoctorsService,
              public positionsService: PositionsService,
              public modalWindowService: ModalWindowService) {}

  ngOnInit(): void {
    this.positionsService.getPositions();
  }

  addNewDoctor(fN, pat, lN, pos) {
    if (this.firstName.length >= 3 && this.patronymic.length >= 3 && this.lastName.length >= 3 && this.position !== '') {
      const modal = document.querySelector('.modal');

      this.checkDoc = true;
      const doc = {firstName: fN, patronymic: pat, lastName: lN, position: pos, records: {}};

      for (let prop in this.doctorsService.doctors) {
        for (let k in this.doctorsService.doctors[prop]) {
          if (this.doctorsService.doctors[prop][k].firstName === fN && this.doctorsService.doctors[prop][k].patronymic === pat && this.doctorsService.doctors[prop][k].lastName === lN && this.doctorsService.doctors[prop][k].position === pos) {
            this.checkDoc = false;
          }
        }
      }

      if (this.checkDoc) {
        modal.classList.add('show');
        this.doctorsService.createDoctor(doc).subscribe(() => this.doctorsService.getDoctors(), err => console.error(err));
        this.firstName = '';
        this.patronymic = '';
        this.lastName = '';
        this.position = '';
      } else if (!this.checkDoc)
        modal.classList.add('show');
    }
  }
}
