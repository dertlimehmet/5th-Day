import { Inject, Injectable } from '@angular/core';
import { CarRepositoryService } from './car-repository.service';
import { Cars } from './models/cars';

@Injectable({
  providedIn: 'root',
})
export class CarsService {
  constructor(
    private carRepository: CarRepositoryService,
  ) {
  }

  getAll(): ReadonlyArray<Cars> {
    let carList: Cars[] = [];
    this.carRepository.getList().forEach((c) => {
      carList.push({
        id: c.id,
        name: c.name,
        price: c.price,
        color: c.color,
        stock: c.stock,
      });
    });
    return carList as ReadonlyArray<Cars>;
  }

  getById(id: number): Cars | undefined {
    return this.carRepository.getById(id);
  }

  add(car: Cars) {
    this.carRepository.add(car);
  }

  update(car: Cars) {
    this.carRepository.update(car);
  }

  delete(id: number) {
    this.carRepository.delete(id);
  }
}
