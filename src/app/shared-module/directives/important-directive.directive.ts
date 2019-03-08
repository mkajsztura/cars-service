import { Directive, ElementRef } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[csImportantDirective]'
})
export class ImportantDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.style.fontWeight = 700;
  }

}
