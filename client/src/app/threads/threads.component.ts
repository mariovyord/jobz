import { Component, OnInit } from '@angular/core';
import { ThreadBodyComponent } from './components/thread-body/thread-body.component';
import { ThreadsService } from './services/threads.service';
import { AsyncPipe } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BehaviorSubject, tap } from 'rxjs';

@Component({
  selector: 'app-threads',
  standalone: true,
  imports: [ThreadBodyComponent, AsyncPipe, MatProgressSpinnerModule],
  providers: [ThreadsService],
  templateUrl: './threads.component.html',
  styleUrl: './threads.component.less',
})
export class ThreadsComponent {
  public loading$ = new BehaviorSubject(true);
  public threads$ = this.threadsService
    .getAllThreads$()
    .pipe(tap(() => this.loading$.next(false)));

  constructor(private threadsService: ThreadsService) {}
}
