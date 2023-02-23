import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Cars } from '../models/cars';

@Component({
  selector: 'app-child-detail',
  templateUrl: './child-detail.component.html',
  styleUrls: ['./child-detail.component.css']
})
export class ChildDetailComponent {

  @Input() selectedCar:Cars | undefined;
  @Output() closeEventClick=new EventEmitter();
  close(){
    this.closeEventClick.emit();
  }

}
