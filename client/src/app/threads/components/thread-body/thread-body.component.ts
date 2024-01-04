import { Component, Input } from '@angular/core';
import { Thread } from '../../types/thread.type';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-thread-body',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './thread-body.component.html',
  styleUrl: './thread-body.component.less',
})
export class ThreadBodyComponent {
  @Input() public thread: Thread;
}
