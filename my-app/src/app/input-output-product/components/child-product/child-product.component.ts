import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-child-product',
  templateUrl: './child-product.component.html',
  styleUrls: ['./child-product.component.css']
})
export class ChildProductComponent {

  @Input() productList:ReadonlyArray<Product> | undefined;
  @Output() detailShowClick= new EventEmitter<number>();


  selecetedId:number | undefined;


  showDetail(id:number){
    this.selecetedId=id;
    this.detailShowClick.emit(this.selecetedId);
  }

  highlight(productId:number){
    return this.selecetedId==productId;
  }

}
