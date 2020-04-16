import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalWindowService {

  close() {
    const modal = document.querySelector('#modal__window');
    modal.classList.remove('show');
  }
}
