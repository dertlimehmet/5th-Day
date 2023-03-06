import { outputAst } from '@angular/compiler';
import { Component, EventEmitter } from '@angular/core';
import { Product } from '../../models/product';
import { ProductStateService } from '../../states/product-state.service';

@Component({
  selector: 'app-product-list-checked',
  templateUrl: './product-list-checked.component.html',
  styleUrls: ['./product-list-checked.component.css']
})
export class ProductListCheckedComponent {

  product:Product[]=[];

  constructor(private productState:ProductStateService){
    this.product=this.productState.productList.filter(x=>x.isOK==true);

  }

  load(){
    this.product=this.productState.productList.filter(x=>x.isOK==true);
  }

}
