import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ProductListCheckedComponent } from './pages/product-list-checked/product-list-checked.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    console.log(this.productListChecked);
  }
  title = 'app';

  @ViewChild(ProductListCheckedComponent) productListChecked:
    | ProductListCheckedComponent
    | undefined;

  loadToListWithOKComponent() {
    console.log('tetiklendi');
    this.productListChecked?.load();
  }
}
