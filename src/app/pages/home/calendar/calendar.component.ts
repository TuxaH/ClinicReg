import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import * as moment from 'moment';
import {DateService} from '../../../shared/services/date.service';
import {RecordService} from '../../../shared/services/record.service';
import {ModalWindowService} from '../../../shared/services/modal-window.service';
import {LoginService} from '../../../shared/services/login.service';

interface Day {
  value: moment.Moment;
  active: boolean;
  disabled: boolean;
  selected: boolean;
}

interface Week {
  days: Day[];
}

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  calendar: Week[];

  selectDate = moment().format('DD-MM-YYYY');
  dayNow = moment().format('MM DD, YYYY');

  // @Output() prop = new EventEmitter<string>();

  constructor(private dateService: DateService,
              private recordService: RecordService,
              public modalWindowService: ModalWindowService,
              private loginService: LoginService) {}

  ngOnInit(): void {
    this.dateService.date.subscribe(this.generate.bind(this))
  }

  generate(now: moment.Moment) {
    const startDay = now.clone().startOf('month').startOf('week');
    const endDay = now.clone().endOf('month').endOf('week');

    const date = startDay.clone().subtract(1, 'day');

    const calendar = [];

    while (date.isBefore(endDay, 'day')) { //метод .isBefore проверяет не наступил ли уже этот момент
      calendar.push({
        days: new Array(7)
          .fill(0)
          .map(() => {
            const value = date.add(1, 'day').clone();
            const active = moment().isSame(value, 'date'); //метод .isSame проверяет на соответствие (второй параметр - критерий по которому сравниваются)
            const disabled = !now.isSame(value, 'month');
            const selected = now.isSame(value, 'date');

            return {
              value, active, disabled, selected
            }
          })
      })
    }

    this.calendar = calendar;
  }

  select(day: moment.Moment) {
    const modal = document.querySelector('.modal');

    this.selectDate = day.format('DD-MM-YYYY');

    const sDay = day.format('MM DD, YYYY');
    const msDaySelect = Date.parse(sDay);
    const msDayNow = Date.parse(this.dayNow);

    if (msDayNow > msDaySelect) {
      modal.classList.add('show');
    } else {
      this.dateService.changeDate(day);
      this.recordService.selectDay = this.selectDate;
      this.recordService.msDaySelect = msDaySelect;

      this.loginService.checkNormalUser = true;
    }
  }
}
