import { Component } from '@angular/core';
import {DateService} from '../../../shared/services/date.service';

@Component({
  selector: 'app-selector',
  template: ` <p>
                <i class="fas fa-caret-left" (click)="go(-1)"></i>
                <span>{{ dateService.date | async | moment }}</span>
                <i class="fas fa-caret-right" (click)="go(1)"></i>
              </p>`,
  styles: [`p {
              margin-bottom: 1rem;

              display: flex;
              justify-content: center;
              align-items: center;

              font-size: 2rem;
            }
            span {
              margin: 0 2rem;
              width: 300px;

              text-align: center;
            }
            i {
              cursor: pointer;
            }`]
})
export class SelectorComponent {

  constructor(public dateService: DateService) {}

  go(dir: number) {
    this.dateService.changeMonth(dir);
  }
}
