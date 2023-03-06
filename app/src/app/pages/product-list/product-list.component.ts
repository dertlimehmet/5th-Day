import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductStateService } from '../../states/product-state.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  productList: Product[] = [];
  @Output() isOKClickEvent = new EventEmitter();

  constructor(private productState: ProductStateService) {}
  ngOnInit(): void {
    this.productList = this.productState.productList;
  }

  isOK(id: number) {
    // let productIndexToUpdate = this.productList.findIndex((x) => x.id == id);
    // this.productList[productIndexToUpdate].isOK =
    //   !this.productList[productIndexToUpdate].isOK;

    this.productState.isOK(id);

    this.isOKClickEvent.emit();
    console.log(this.productState.productList);
  }
}
