import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalWindowService {

  item;
  doctor;
  docKey;
  day;
  time;

  close() {
    const modal = document.querySelector('.modal');
    modal.classList.remove('show');
  }

  closeReg() {
    const modal = document.querySelector('#modal__window__reg');
    modal.classList.remove('show');
  }

  showModalConfirm(item?, doctor?, docKey?, day?, time?) {
    this.item = item;
    this.doctor = doctor;
    this.docKey = docKey;
    this.day = day;
    this.time = time;
    const modalConfirm = document.getElementById('modal__window__confirm');
    modalConfirm.classList.add('show');
  }

  closeConfirm() {
    const modal = document.querySelector('#modal__window__confirm');
    modal.classList.remove('show');
  }
}
