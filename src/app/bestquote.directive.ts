import { Directive, Input, ElementRef, HostListener } from '@angular/core';
import { Quote } from './quote';

@Directive({
  selector: '[appBestquote]'
})
export class BestquoteDirective {

  @Input() quotes: Quote[];

  constructor(private elem: ElementRef) {

    this.elem.nativeElement.style.backgroundColor = 'blue';

  }

}

