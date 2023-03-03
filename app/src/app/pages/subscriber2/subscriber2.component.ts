import { Component, OnInit } from '@angular/core';
import { SubjectProviderService } from '../subject-provider.service';

@Component({
  selector: 'page-subscriber2',
  templateUrl: './subscriber2.component.html',
  styleUrls: ['./subscriber2.component.css']
})
export class Subscriber2Component implements OnInit {

  name:string|undefined;
  constructor(private subjectProviderService:SubjectProviderService){}
  ngOnInit(): void {
    this.subjectProviderService.myObservableName.subscribe((x)=>{
      this.name=x as string;
    })
  }

  


}
