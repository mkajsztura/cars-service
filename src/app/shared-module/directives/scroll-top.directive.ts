import { Directive, Inject, ElementRef, Renderer2, HostBinding, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[csScrollTop]'
})
export class ScrollTopDirective {

  private scrollTopBtnThreshold = 150;

  @HostBinding('class.scroll-top-btn') // nasłuchiwanie na
  @HostListener('click') onClick() { // nasłuchiwanie na eventy hosta
    window.scrollTo(0, 0);
  }
  @HostListener('document:scroll') onScroll () { // nasłuchiwanie na event document
    let scrollPosition = window.scrollY || this.document.documentElement.scrollTop || this.document.body.scrollTop;

    if (scrollPosition > this.scrollTopBtnThreshold) {
      this.renderer.setStyle(this.hostElement.nativeElement, 'display', 'block');
    } else {
      this.renderer.setStyle(this.hostElement.nativeElement, 'display', 'none');
    }


}

  constructor(
    @Inject (DOCUMENT) private document, // @Inject do wstrzykiwania wartości prymitiwnych
    private hostElement: ElementRef,
    private renderer: Renderer2
  ) { }

}
