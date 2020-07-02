import { Directive, ElementRef } from '@angular/core';
//import { emitKeypressEvents } from 'readline';

@Directive({
  selector: '[appRed]'
})
export class RedDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.style.color = '#e35e6b'
  }

}
