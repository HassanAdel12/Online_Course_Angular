import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustom]',
  standalone: true
})
export class CustomDirective {

  constructor(private myref:ElementRef)
   {
  
    myref.nativeElement.style="box-shadow: inset 4px 0 #1865f2 ; "   
   
  }
    @HostListener('click') click()
    {
     this.myref.nativeElement.style="box-shadow: inset 4px 0 #1865f2 ; "   
    }

}
