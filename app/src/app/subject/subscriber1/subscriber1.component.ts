import { Component } from '@angular/core';
import { SubjectProviderService } from '../subject-provider.service';

@Component({
  selector: 'app-subscriber1',
  templateUrl: './subscriber1.component.html',
  styleUrls: ['./subscriber1.component.css'],
})
export class Subscriber1Component {
  constructor(private subjectProviderService: SubjectProviderService) {
    this.subjectProviderService.observableSubject.subscribe({
      next: (data) => console.log('Subscriber1', data),
      complete: () => console.log('Data yayınlanma sona ermiştir subscriber1'),
      error: (err) => {
        console.log(err);
      },
    });
  }
}
