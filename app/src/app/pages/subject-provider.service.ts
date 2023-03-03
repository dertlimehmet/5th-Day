import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectProviderService {

  private name;
  public myObservableName=new Subject;

  constructor() {
    this.name=new Subject();
    
   }
}
