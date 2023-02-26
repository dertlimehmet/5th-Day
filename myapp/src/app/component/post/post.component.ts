import { Component } from '@angular/core';
import { User } from 'src/app/models/user';
import { MyserviceService } from '../../myservice.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent {
  userList: ReadonlyArray<User> = [];
  constructor(private myService: MyserviceService) {
    this.myService.getPost().subscribe((x) => (this.userList = x));
  }

  searchId(search: number) {
    this.myService.getById(search).subscribe((x) => {
      this.userList = x;
    });
  }
}
