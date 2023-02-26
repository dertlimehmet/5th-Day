import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User } from './models/user';
import { find, from, map, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MyserviceService {

  
  constructor(private httpClient: HttpClient) {}

  getPost() {
    return this.httpClient.get<ReadonlyArray<User>>(
      'https://jsonplaceholder.typicode.com/posts'
    );
  }

  getById(id: number) {
    let params = new HttpParams().set('userId', id);
    return this.httpClient.get<ReadonlyArray<User>>(
      'https://jsonplaceholder.typicode.com/posts',
      { params: params }
    );
  }
}
