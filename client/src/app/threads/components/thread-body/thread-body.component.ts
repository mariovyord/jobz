import { Component, Input } from '@angular/core';
import { Thread } from '../../types/thread.type';
import { MatCardModule } from '@angular/material/card';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-thread-body',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './thread-body.component.html',
  styleUrl: './thread-body.component.less',
})
export class ThreadBodyComponent {
  @Input() public thread: Thread;
  @Input() public clickable = false;

  constructor(private router: Router, private route: ActivatedRoute) {}

  public toDetails(): void {
    this.router.navigate([`./${this.thread.id}`], {
      relativeTo: this.route,
    });
  }
}
