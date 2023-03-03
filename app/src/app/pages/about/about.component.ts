import { Component } from '@angular/core';
import { ProductStateService } from '../../service/product-state.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
constructor(public productState:ProductStateService){}
}
