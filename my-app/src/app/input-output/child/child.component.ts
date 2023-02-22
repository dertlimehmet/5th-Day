import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  name:string="Ahmet";
  @Input()title:string | undefined;
  @Output() countClick=new EventEmitter<number>();

  count:number=0;
  increaseCount(){
    this.count++;
    this.countClick.emit(this.count);
  }

}
