import { Injectable } from '@angular/core';
import { Cars } from './models/cars';

@Injectable({
  providedIn: 'root'
})
export class CarRepositoryService {
  private carList: Cars[] = [];

  load() {
    this.carList.push({
      id: 1,
      name: 'BMW',
      price: 200,
      color: 'Black',
      stock: 7,
    });
    this.carList.push({
      id: 2,
      name: 'Volvo',
      price: 300,
      color: 'White',
      stock: 10,
    });
    this.carList.push({
      id: 3,
      name: 'Ford',
      price: 100,
      color: 'Red',
      stock: 5,
    });
  }

  constructor() {
    this.load();
  }

  getList(): ReadonlyArray<Cars> {
    return this.carList as ReadonlyArray<Cars>;
  }

  getById(id: number) {
    return this.carList.find((x) => x.id == id);
  }

  add(newCar: Cars) {
    this.carList.push(newCar);
  }

  update(updateCar: Cars) {
    let carIndexUpdate = this.carList.findIndex((x) => x.id == updateCar.id);

    this.carList[carIndexUpdate].name = updateCar.name;
    this.carList[carIndexUpdate].price = updateCar.price;
    this.carList[carIndexUpdate].color = updateCar.color;
    this.carList[carIndexUpdate].stock = updateCar.stock;
  }

  delete(id: number) {
    let carIndexDelete = this.carList.findIndex((x) => x.id == id);
    this.carList.splice(carIndexDelete, 1);
  }
}
