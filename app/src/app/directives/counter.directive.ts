import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCounter]'
})
export class CounterDirective {

  constructor(private el:ElementRef) { }

  @HostListener('keyup') onKeyUp(){
    let valueLength=this.el.nativeElement.value.length;
    console.log(valueLength);
    if(valueLength>5){
      this.el.nativeElement.style.backgroundColor="red";
    }
    else{
      this.el.nativeElement.style.backgroundColor='';
    }
  }

}
