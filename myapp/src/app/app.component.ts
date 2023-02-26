import { Component } from '@angular/core';
import {
  filter,
  find,
  first,
  from,
  interval,
  map,
  Observable,
  of,
  range,
  take,
  takeLast,
  timer,
} from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { MyserviceService } from './myservice.service';

interface Product {
  id: number;
  name: string;
  price: number;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'myapp';

}
