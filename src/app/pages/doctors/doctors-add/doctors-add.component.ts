import {Component, OnInit} from '@angular/core';
import {DoctorsService} from '../../../shared/services/doctors.service';
import {PositionsService} from '../../../shared/services/positions.service';

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
              public positionsService: PositionsService) {}

  ngOnInit(): void {
    this.positionsService.getPositions();
  }

  addNewDoctor(fN, pat, lN, pos) {
    this.doctorsService.getDoctors();

    this.checkDoc = true;
    const doc = {firstName: fN, patronymic: pat, lastName: lN, position: pos, records: {}};

    for (let prop in this.doctorsService.doctors) {
      for (let k in this.doctorsService.doctors[prop]) {
        if (this.doctorsService.doctors[prop][k].firstName === fN && this.doctorsService.doctors[prop][k].patronymic === pat && this.doctorsService.doctors[prop][k].lastName === lN && this.doctorsService.doctors[prop][k].position === pos) {
          this.checkDoc = false;
        }
      }
    }

    if (this.checkDoc === true) {
      this.doctorsService.createDoctor(doc).subscribe(null, err => console.error(err));
      this.firstName = '';
      this.patronymic = '';
      this.lastName = '';
      this.position = '';
    }
  }
}
