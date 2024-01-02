import { Component } from '@angular/core';
import { ThreadBodyComponent } from './components/thread-body/thread-body.component';

@Component({
  selector: 'app-threads',
  standalone: true,
  imports: [ThreadBodyComponent],
  templateUrl: './threads.component.html',
  styleUrl: './threads.component.less',
})
export class ThreadsComponent {}
