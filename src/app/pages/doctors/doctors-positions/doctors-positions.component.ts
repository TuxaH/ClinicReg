import { Component, OnInit } from '@angular/core';
import {PositionsService} from '../../../shared/services/positions.service';

@Component({
  selector: 'app-doctors-positions',
  templateUrl: './doctors-positions.component.html',
  styleUrls: ['./doctors-positions.component.css']
})
export class DoctorsPositionsComponent implements OnInit {

  position: string = '';
  checkPosition: boolean;

  constructor(public positionsService: PositionsService) {}

  ngOnInit(): void {
    this.positionsService.getPositions();
  }

  addPosition() {
    const pos = {position: this.position};
    this.checkPosition = false;

    this.positionsService.positions.forEach(item => {
      if (item === this.position) {
        this.checkPosition = true;
      }
    });

    if (this.checkPosition === false) {
      this.positionsService.addPosition(this.position, pos).subscribe(data => {
        console.log("Doc ADD");
      }, err => console.error(err));
      this.positionsService.positions.push(this.position);
      this.position = '';
    }
  }

  removePosition(pos) {
    const rem = confirm(`Delete position ${pos} ?`);
    if (rem) {
      this.positionsService.removePosition(pos).subscribe(() => this.positionsService.getPositions(), err => console.error(err));
    }
  }

}
