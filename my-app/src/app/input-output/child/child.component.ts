import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cars } from '../models/cars';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  @Input() carList: ReadonlyArray<Cars> | undefined;
  @Output() detailShowClick = new EventEmitter<number>(); 

  @Input() selectedId: number | undefined;

  showDetail(id: number) {
    this.selectedId = id;
    this.detailShowClick.emit(this.selectedId);
  }

  highlight(carId: number) {
    return this.selectedId == carId;
  }
}
