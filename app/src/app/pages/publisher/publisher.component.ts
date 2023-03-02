import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { SubjectProviderService } from '../../subject/subject-provider.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'page-publisher',
  templateUrl: './publisher.component.html',
  styleUrls: ['./publisher.component.css'],
})
export class PublisherComponent implements OnInit {

  public myNameObservable=new Subject;

  constructor(private subjectServiceProvider:SubjectProviderService){}
  ngOnInit(): void {
  }
  change(data: any) {
    console.log(data);
    this.subjectServiceProvider.mySelectMenuObservable.next(data);
  }

  changeName(){
    console.log();
    this.subjectServiceProvider.mySelectMenuObservable.next(this.name);
  }
  mySelectMenu: NgModel | undefined;
  name:string|undefined;
}
