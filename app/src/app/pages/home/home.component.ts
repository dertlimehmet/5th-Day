import { Component, OnDestroy } from '@angular/core';
import { User, UserStateService } from '../../service/user-state.service';
import { ProductStateService } from '../../service/product-state.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnDestroy {
  user?: User;
  constructor(
    userState: UserStateService,
    private productSate: ProductStateService
  ) {
    this.user = userState.currentUser;
  }
  ngOnDestroy(): void {
    console.log('home destroy component');
  }
  addProduct() {
    this.productSate.product.push({
      id: 1,
      color: 'black',
      name: 'kalem',
      price: 3,
    });
  }
}
