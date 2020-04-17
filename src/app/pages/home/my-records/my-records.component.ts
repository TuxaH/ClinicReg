import { Component, OnInit } from '@angular/core';
import {DoctorsService} from '../../../shared/services/doctors.service';

@Component({
  selector: 'app-my-records',
  templateUrl: './my-records.component.html',
  styleUrls: ['./my-records.component.css']
})
export class MyRecordsComponent implements OnInit {

  constructor(private doctorsService: DoctorsService) {}

  ngOnInit(): void {
  }

}
