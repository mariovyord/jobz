import { Component, OnInit } from '@angular/core';
import { ThreadsService } from '../../services/threads.service';
import { Thread } from '../../types/thread.type';
import { ActivatedRoute } from '@angular/router';
import { ThreadBodyComponent } from '../thread-body/thread-body.component';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-thread-details',
  standalone: true,
  imports: [ThreadBodyComponent],
  templateUrl: './thread-details.component.html',
  styleUrl: './thread-details.component.less',
})
export class ThreadDetailsComponent implements OnInit {
  public threadId: string;
  public thread: Thread;
  public comments: Comment;

  constructor(
    private threadsService: ThreadsService,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe((params) => {
      this.threadId = params['id'];
    });
  }

  public ngOnInit(): void {
    this.threadsService
      .getThreadById$(this.threadId)
      .pipe(untilDestroyed(this))
      .subscribe((thread) => {
        this.thread = thread;
      });
  }
}
