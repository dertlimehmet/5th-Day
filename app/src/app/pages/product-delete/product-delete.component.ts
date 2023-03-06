import { Component } from '@angular/core';
import { ProductStateService } from '../../states/product-state.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css'],
})
export class ProductDeleteComponent {
  constructor(private productState: ProductStateService) {}

  delete() {
    let productIndexToDelete = this.productState.productList.findIndex(
      (x) => x.id == 2
    );
    this.productState.productList.splice(productIndexToDelete,1);
  }
}
