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
import { FakeserviceService } from './fakeservice.service';

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

  constructor(private fakeService: FakeserviceService) {
    //1.yol
    // this.fakeService
    //   .SavePost({ id: 1, title: 'title 1', body: 'body 1', userId: 2 })
    //   .subscribe((x) => {
    //     console.log(x);
    //   });
    //2.yol
    // this.fakeService
    //   .SavePost({ id: 1, title: 'title 1', body: 'body 1', userId: 2 })
    //   .subscribe({
    //     next: (data) => console.log(data),
    //     error: (err) => console.log(err),
    //     complete: () => console.log('tamamlandı'),

    //   });
    // this.fakeService
    // .SavePostWithError({ id: 1, title: 'title 1', body: 'body 1', userId: 2 })
    // .subscribe({
    //   next: (data) => console.log(data),
    //   error: (err) => console.log(err.message),
    //   complete: () => console.log('tamamlandı'),
    // });

    // this.fakeService
    //   .UpdatePut({ id: 1, title: 'title 1', body: 'body 1', userId: 2 })
    //   .subscribe({
    //     next: (data) => console.log(data),
    //     error: (err) => console.log(err.message),
    //     complete: () => console.log('tamamlandı'),
    //   });

    // this.fakeService.deletePost(1).subscribe(x=>{
    //   console.log(x)
    // })

    // this.fakeService.getParallelRequest().postObservable.subscribe(x=>console.log(x));
    // this.fakeService.getParallelRequest().userObservable.subscribe(x=>console.log(x));

    // this.fakeService
    //   .getParallelWithForkJoinOperator()
    //   .subscribe((x) => console.log(x));
    //x.get       -----data
    //x.post      -----data

    // this.fakeService.getPostWithUserId(1).subscribe(x=>{
    //   console.log(x)
    // })

    this.fakeService.getTodosWithUserId(2).subscribe(x=>{
      console.log(x);
    })

    // this.fakeService.getPostWithHeader().subscribe((x) => {
    //   console.log(x);
    // });
  }

  // constructor() {
  //   //of
  //   // let ofOperator=of(1,2,3,4,5);
  //   // ofOperator.subscribe(x=>{
  //   //   console.log(x)
  //   // })
  //   // let subscriber1=ofOperator.subscribe(x=>{
  //   //   console.log(x)
  //   // })
  //   // subscriber1.unsubscribe();

  //   //interval
  //   // interval(1000).subscribe(x=>{
  //   //   console.log(x)
  //   // })

  //   //timer
  //   // timer(5000).subscribe(x=>{
  //   //   console.log(x)

  //   //   alert("Kampanya var");
  //   // })

  //   //range
  //   // range(1,20).subscribe(x=>{
  //   //   console.log(x);
  //   // })

  //   //ajax
  //   // ajax
  //   //   .getJSON('https://jsonplaceholder.typicode.com/todos/1')
  //   //   .subscribe((x) => {
  //   //     console.log(x);
  //   //   });

  //   //create Observable
  //   // let myObservable = Observable.create((observer: any) => {
  //   //   observer.next('Hey guys!');
  //   //   observer.next('Hey guys 2!');
  //   //   observer.next('Hey guys 3!');
  //   //   observer.complete();
  //   // });

  //   // myObservable.subscribe((x: any) => {
  //   //   console.log(x);
  //   // });
  //   // myObservable.subscribe({
  //   //   next: (value: any) => console.log(value),
  //   //   error: (err: Error) => console.log(err),
  //   //   complete: () => console.log('Data alma işlemi bitti!'),
  //   // });

  //   //Filter Operators
  //   //first operator
  //   // var fromOperator = from([10, 20, 30, 40, 50, 60, 70]);
  //   // fromOperator.pipe(first()).subscribe((x) => {
  //   //   console.log(x);
  //   // });

  //   //find operator
  //   // var fromOperator = from([10, 20, 30, 40, 50, 60, 70]);
  //   // var fromOperatorByProduct = from([
  //   //   { id: 1, name: 'kalem 1', price: 100 },
  //   //   { id: 2, name: 'kalem 2', price: 200 },
  //   //   { id: 3, name: 'kalem 3', price: 300 },
  //   // ]);
  //   // fromOperatorByProduct.pipe(find(x=>x.id==2)).subscribe(x=>{
  //   //   console.log(x);
  //   // })
  //   // fromOperator.pipe(find((x) => x > 30)).subscribe((x) => {
  //   //   console.log(x);
  //   // });

  //   //filter
  //   // var fromOperatorByProduct = from([
  //   //   { id: 1, name: 'kalem 1', price: 100 },
  //   //   { id: 2, name: 'kalem 2', price: 200 },
  //   //   { id: 3, name: 'kalem 3', price: 300 },
  //   // ]);
  //   // fromOperatorByProduct.pipe(filter(x=>x.id==2)).subscribe(x=>{
  //   //   console.log(x);
  //   // })

  //   //take
  //   // var fromOperatorByProduct = from([
  //   //   { id: 1, name: 'kalem 1', price: 100 },
  //   //   { id: 2, name: 'kalem 2', price: 200 },
  //   //   { id: 3, name: 'kalem 3', price: 300 },
  //   // ]);
  //   // fromOperatorByProduct.pipe(take(2)).subscribe(x=>{
  //   //   console.log(x);
  //   // })

  //   //takeLast
  //   // var fromOperatorByProduct = from([
  //   //   { id: 1, name: 'kalem 1', price: 100 },
  //   //   { id: 2, name: 'kalem 2', price: 200 },
  //   //   { id: 3, name: 'kalem 3', price: 300 },
  //   // ]);
  //   // fromOperatorByProduct.pipe(takeLast(2)).subscribe((x) => {
  //   //   console.log(x);
  //   // });

  //   //map
  //   // var fromOperator = from([10, 20, 30, 40, 50, 60, 70]);
  //   // fromOperator.pipe(map(x=>x*2)).subscribe(x=>{
  //   //   console.log(x)
  //   // })

  // }
}
