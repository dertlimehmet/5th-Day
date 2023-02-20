import { Component } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-structural-directive',
  templateUrl: './structural-directive.component.html',
  styleUrls: ['./structural-directive.component.css']
})
export class StructuralDirectiveComponent {

  toggleShow: boolean = true;
  messageCount: number = 10;
  productList: Product[] = [];
  boxCss = false;
  box2Css = false;
  box3Css = false;
  constructor() {
    this.productList.push(new Product(1, 'kalem 1', 100));

    this.productList.push(new Product(2, 'kalem 2', 300))
    this.productList.push(new Product(3, 'kalem 3', 300))
  }
  toggle() {
    this.toggleShow = !this.toggleShow;
  }

  addProduct() {
    this.productList.push(new Product(4, 'kalem 4', 400));
  }

  removeProduct(id: number) {
    this.productList = this.productList.filter(x => x.id != id);


    // if-else tek satır yazım şekli
    var deger= this.productList.length>5 ? 10 : 20;
  }
  addClass() {
    this.boxCss = true;
    this.box2Css = true;
  }
}
