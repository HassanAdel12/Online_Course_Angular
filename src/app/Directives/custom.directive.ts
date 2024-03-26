import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustom]',
  standalone: true
})
export class CustomDirective {

  constructor(private myref:ElementRef)
   {
  
   
   
  }
   
    @HostListener('mouseover') changecolor()
    {
        this.myref.nativeElement.style.color="black"
        this.myref.nativeElement.style.backgroundcolor="red"

    }

}


