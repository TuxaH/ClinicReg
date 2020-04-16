import {Directive, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appOnlyWords]'
})
export class OnlyWordsDirective {

  regexStr = '^[0-9]*$';
  constructor() {}

  @Input() appOnlyWords: boolean;

  @HostListener('keydown', ['$event']) onKeyDown(event) {
    let e = <KeyboardEvent> event;
    if (this.appOnlyWords) {
      let ch = String.fromCharCode(e.keyCode);
      let regEx =  new RegExp(this.regexStr);
      if(regEx.test(ch))
        e.preventDefault();
      else
        return;
    }
  }
}
