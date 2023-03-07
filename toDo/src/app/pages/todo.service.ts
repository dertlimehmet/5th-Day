import { Injectable } from '@angular/core';
import { find, from, Observable, of, toArray } from 'rxjs';
import { Todo } from './models/todo';
import { TodoUpdate } from './models/todo-update';
import { TodoSave } from './models/todo-save';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  toDoList: Todo[] = [];
  constructor() {}

  getAll(): Observable<Todo[]> {
    return from(this.toDoList).pipe(toArray());
  }
  get(id: number): Observable<Todo | undefined> {
    return from(this.toDoList).pipe(find((x) => x.id == id));
  }
  delete(id: number): Observable<boolean> {
    var toDoIndexToDelete = this.toDoList.findIndex((x) => x.id == id);
    if (toDoIndexToDelete <= -1) {
      return of(false);
    }
    this.toDoList.splice(toDoIndexToDelete, 1);

    return of(true);
  }
  save(newTodo: TodoSave):Observable<boolean> {
    const newId = Math.floor(Math.random() * 100);
    this.toDoList.push({
      id: newId,
      content: newTodo.content,
      isCompleted: false,
      created: new Date(),
    });
    return of(true);
  }
  update(todo: TodoUpdate): Observable<boolean> {
    var toDoIndexToUpdate = this.toDoList.findIndex((x) => x.id == todo.id);
    if (toDoIndexToUpdate <= -1) {
      return of(false);
    }
    this.toDoList[toDoIndexToUpdate].content = todo.content;
    return of(true);
  }
  isCompleted(id: number): Observable<boolean> {
    var toDoIndexComplete = this.toDoList.findIndex((x) => x.id == id);
    if (toDoIndexComplete <= -1) {
      return of(false);
    }
    this.toDoList[toDoIndexComplete].isCompleted =
      !this.toDoList[toDoIndexComplete].isCompleted;
    return of(true);
  }
}
