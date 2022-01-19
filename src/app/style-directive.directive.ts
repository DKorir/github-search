import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appStyleDirective]'
})
export class StyleDirectiveDirective {

  constructor(private elem:ElementRef) { 
    this.elem.nativeElement.style.color='blue';
  }

}



