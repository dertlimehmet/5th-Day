import { Component } from '@angular/core';
import { Product2 } from 'src/app/models/product2';

@Component({
  selector: 'app-example-pipe',
  templateUrl: './example-pipe.component.html',
  styleUrls: ['./example-pipe.component.css']
})
export class ExamplePipeComponent {

  product: Product2;
  name:string="anGulAr";
  currentDate=new Date();
  price:number=20.99;

  constructor() {
    this.product = { id: 1, name: "kalem 1", price: 20.99 }
  }
}
