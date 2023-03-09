import { Component, EventEmitter, Input, Output } from '@angular/core';
import { VisitorLogService } from '../../visitor-log.service';
import { User } from '../../user';

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.css'],
})
export class AdminUserComponent {
  @Input() userList: ReadonlyArray<User> = [];
  @Output() detailShowClick = new EventEmitter<string>();
  @Input() selectedId: string | undefined;

  constructor(private myService: VisitorLogService) {
    this.myService.getUser().subscribe((x) => {
      this.userList = x;
    });
  }
  showDetail(id: string) {
    this.selectedId = id;
    this.detailShowClick.emit(this.selectedId);
  }
}
