import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @HostBinding('style.border') border:string;
  @HostBinding("class.border-invalid") invalidCss:boolean;
  @HostListener("mouseover") mouseOver(){
    console.log("mouse over");
    this.border="10px solid blue"
  }
  @HostListener("mouseleave") mouseLeave(){
    console.log("mouse leave");
    this.border="2px solid red"
  }

  constructor() {
    this.invalidCss=true;
    this.border="2px solid red"
    console.log("appHighlight çalıştı")
   }

}
