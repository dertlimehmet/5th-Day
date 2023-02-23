import { Component } from '@angular/core';
import { Cars } from '../models/cars';
import { CarsService } from '../cars.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent {
  carList: ReadonlyArray<Cars>;
  selectedCar: Cars | undefined;

  constructor(private carService:CarsService){
    this.carList=this.carService.getAll();
  }

  get toggleCarDetail(){
    return this.selectedCar !=undefined;
  }

  showDetail(carId:number){
    this.selectedCar=this.carService.getById(carId);
  }

  close(){
    this.selectedCar=undefined;
  }
}
