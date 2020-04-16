import {Component, OnInit} from '@angular/core';
import {DoctorsService} from '../../../shared/services/doctors.service';

@Component({
  selector: 'app-doctors-list',
  templateUrl: './doctors-list.component.html',
  styleUrls: ['./doctors-list.component.css']
})
export class DoctorsListComponent implements OnInit {
  constructor(public doctorsService: DoctorsService) {}

  ngOnInit(): void {
    this.doctorsService.getDoctors();
  }

  remove(doctor) {
    const rem = confirm(`Delete doctor ${doctor} ? Then all records to the doctor are deleted !!!`);

    if (rem) {
      this.doctorsService.removeDoctor(doctor).subscribe(() => {
        this.doctorsService.getDoctors();
      }, err => console.error(err));
    }
  }
}
