import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Post } from './models/post';
import {
  catchError,
  finalize,
  find,
  first,
  from,
  map,
  Observable,
  of,
  startWith,
  switchMap,
  throwError,
} from 'rxjs';
import { Postupdate } from './models/postupdate';
import { forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FakeserviceService {
  constructor(private httpClient: HttpClient) {}

  getPost() {
    let userId = 1;
    return this.httpClient
      .get<Post[]>(
        `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
      )
      .pipe(
        switchMap((x) => from(x)),
        map((x) => `${x.id}-${x.title}`)
      );
  }

  getPostGood() {
    let userId = 1;
    const params = new HttpParams().set('userId', '1').set('abc', 'abc');
    return this.httpClient
      .get<Post[]>(`https://jsonplaceholder.typicode.com/posts`, { params })
      .pipe(
        switchMap((x) => from(x)),
        map((x) => `${x.id}-${x.title}`)
      );
  }

  getPostWithHeader() {
    let myheaders = new HttpHeaders().set('authorization', 'my token');
    return this.httpClient.get<Post[]>(
      `https://jsonplaceholder.typicode.com/posts`,
      { headers: myheaders }
    );
  }

  SavePost(newPost: Post) {
    return this.httpClient.post(
      `https://jsonplaceholder.typicode.com/posts`,
      newPost
    );
  }

  SavePostWithError(newPost: Post) {
    return this.httpClient
      .post(`https://jsonplaceholder.typicode.com/pots`, newPost)
      .pipe(
        catchError((err) => {
          //console.log(err);
          return throwError(() => new Error('bir hata meydana geldi'));
        }),
        finalize(() => console.log('finalize methodu çalıştı'))
      );
  }

  UpdatePut(updatePost: Postupdate) {
    return this.httpClient.put<any>(
      `https://jsonplaceholder.typicode.com/posts/${updatePost.id}`,
      updatePost
    );
  }

  deletePost(id: number) {
    return this.httpClient.delete(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
  }

  getParallelRequest() {
    var post = this.httpClient.get(
      'https://jsonplaceholder.typicode.com/posts'
    );
    var users = this.httpClient.get(
      'https://jsonplaceholder.typicode.com/users'
    );
    return { postObservable: post, userObservable: users };
  }

  getParallelWithForkJoinOperator() {
    return forkJoin({
      post: this.httpClient.get('https://jsonplaceholder.typicode.com/posts'),
      get: this.httpClient.get('https://jsonplaceholder.typicode.com/users'),
    });
  }

  getPostWithUserId(id: number) {
    return this.httpClient
      .get<any[]>('https://jsonplaceholder.typicode.com/users')
      .pipe(
        switchMap((x) => from(x)),
        find((x) => x.id == id),
        switchMap((x) =>
          this.httpClient.get<any[]>(
            `https://jsonplaceholder.typicode.com/posts?userId=${x.id}`
          )
        )
      );
  }

  //deftere not düşülen örnek
  getTodosWithUserId(id: number) {
    return this.httpClient
      .get<any[]>('https://jsonplaceholder.typicode.com/todos')
      .pipe(
        switchMap((x) => from(x)),
        find((x) => x.id == id),
        switchMap((x) =>
          this.httpClient.get<any[]>(
            `https://jsonplaceholder.typicode.com/albums?userId=${x.id}`
          )
        )
      );
  }
}
