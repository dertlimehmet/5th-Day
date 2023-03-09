import { EventEmitter, Injectable, Output, Input } from '@angular/core';
import { Visitor } from './visitor';
import { HttpClient } from '@angular/common/http';
import { Posts } from './posts';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class VisitorLogService {
  visitorList: Visitor[] = [];
  @Output() detailShowClick = new EventEmitter<number>();
  @Input() selectedId: number | undefined;
  constructor(private httpClient: HttpClient) {}

  getPost() {
    return this.httpClient.get<ReadonlyArray<Posts>>(
      'https://jsonplaceholder.typicode.com/posts'
    );
  }
  getComment() {
    return this.httpClient.get<ReadonlyArray<Posts>>(
      'https://jsonplaceholder.typicode.com/comments'
    );
  }
  getUser() {
    return this.httpClient.get<ReadonlyArray<User>>(
      'https://jsonplaceholder.typicode.com/users'
    );
  }

  showDetail(id: number) {
    this.selectedId = id;
    this.detailShowClick.emit(this.selectedId);
  }
}
