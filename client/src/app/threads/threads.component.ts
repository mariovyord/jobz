import { Component, OnInit } from '@angular/core';
import { ThreadBodyComponent } from './components/thread-body/thread-body.component';
import { ThreadsService } from './services/threads.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-threads',
  standalone: true,
  imports: [ThreadBodyComponent, AsyncPipe],
  providers: [ThreadsService],
  templateUrl: './threads.component.html',
  styleUrl: './threads.component.less',
})
export class ThreadsComponent {
  public threads$ = this.threadsService.getAllThreads$();

  constructor(private threadsService: ThreadsService) {}
}
