import { Component, OnInit } from '@angular/core';
import {PositionsService} from '../../../shared/services/positions.service';
import {ModalWindowService} from '../../../shared/services/modal-window.service';

@Component({
  selector: 'app-doctors-positions',
  templateUrl: './doctors-positions.component.html',
  styleUrls: ['./doctors-positions.component.css']
})
export class DoctorsPositionsComponent implements OnInit {

  position: string = '';
  checkPosition: boolean;

  constructor(public positionsService: PositionsService,
              public modalWindowService: ModalWindowService) {}

  ngOnInit(): void {
    this.positionsService.getPositions();
  }

  addPosition() {
    const modal = document.querySelector('.modal');

    const pos = {position: this.position};
    this.checkPosition = true;

    this.positionsService.positions.forEach(item => {
      if (item === this.position) {
        this.checkPosition = false;
      }
    });

    if (this.checkPosition) {
      modal.classList.add('show');
      this.positionsService.addPosition(this.position, pos).subscribe( null, err => console.error(err));
      this.positionsService.positions.push(this.position);
      this.position = '';
    } else if (!this.checkPosition)
      modal.classList.add('show');
  }

  removePosition(pos) {
    const rem = confirm(`Delete position ${pos} ?`);
    if (rem) {
      this.positionsService.removePosition(pos).subscribe(() => this.positionsService.getPositions(), err => console.error(err));
    }
  }

}
