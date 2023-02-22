import { Component } from '@angular/core';
import { Product } from '../../models/product';
import { ProductRepository } from '../../product-repository';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-parent-product',
  templateUrl: './parent-product.component.html',
  styleUrls: ['./parent-product.component.css'],
})
export class ParentProductComponent {
  productList: ReadonlyArray<Product>;
  selectedProduct: Product | undefined;

  constructor(private productService: ProductService,) {

    this.productList = this.productService.getAll();
  }

  get toggleProductDetail() {
    return this.selectedProduct != undefined;
  }

  showDetail(productId: number) {
    this.selectedProduct = this.productService.getById(productId);
  }
}
