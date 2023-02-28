import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
  DoCheck,
  OnDestroy,
  AfterContentInit,
} from '@angular/core';

@Component({
  selector: 'app-show-productname',
  templateUrl: './show-productname.component.html',
  styleUrls: ['./show-productname.component.css'],
})
export class ShowProductnameComponent
  implements OnInit, OnChanges, DoCheck, OnDestroy, AfterContentInit
{
  @Input() productName: string = '';

  constructor() {
    //değişkenlere ilk değerleri vermek için kullanılır
    console.log('Constructor Method');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit method');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy method');
  }
  ngDoCheck(): void {
    console.log('DoCheck Method');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChange', changes);
  }
  ngOnInit(): void {
    console.log('ngOnInit method');
  }
}
