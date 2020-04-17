import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalWindowService {

  close() {
    const modal = document.querySelector('.modal');
    modal.classList.remove('show');
  }

  closeReg() {
    const modal = document.querySelector('#modal__window__reg');
    modal.classList.remove('show');
  }
}
