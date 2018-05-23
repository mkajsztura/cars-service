import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[csImportantDirective]'
})
export class ImportantDirectiveDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.style.fontWeight = 700;
   }

}
