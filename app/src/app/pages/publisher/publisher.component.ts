import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { SubjectProviderService } from '../subject-provider.service';

@Component({
  selector: 'page-publisher',
  templateUrl: './publisher.component.html',
  styleUrls: ['./publisher.component.css']
})
export class PublisherComponent implements OnInit {

  name=new FormControl('');
  ngOnInit(): void {
  }

  public myNameObservable=new Subject;

  constructor(private subjectProviderService:SubjectProviderService){}



  changeName(){
    console.log();
    this.subjectProviderService.myObservableName.next(this.name);
  }


}
