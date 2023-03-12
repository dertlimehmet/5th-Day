import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Posts } from 'src/app/posts';
import { VisitorLogService } from '../../visitor-log.service';
import { ICommentPost } from '../../icomment-post';

@Component({
  selector: 'app-admin-post',
  templateUrl: './admin-post.component.html',
  styleUrls: ['./admin-post.component.css'],
})
export class AdminPostComponent {
  @Input() postList: ReadonlyArray<Posts> | undefined;
  @Input() commentList: ReadonlyArray<ICommentPost> | undefined;
  @Output() detailShowClick = new EventEmitter<number>();
  selectedId: number | undefined;

  constructor(private myService: VisitorLogService) {
    this.myService.getPost().subscribe((x) => (this.postList = x));
  }

  showDetail(id: number) {
    this.selectedId = id;

    this.detailShowClick.emit(this.selectedId);
    this.myService
      .getComment(this.selectedId)
      .subscribe((x) => (this.commentList = x));
  }
}
