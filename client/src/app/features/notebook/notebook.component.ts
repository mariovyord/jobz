import { Component } from '@angular/core';
import { JobFeedComponent } from '../../shared/components/job-feed/job-feed.component';

@Component({
  selector: 'app-notebook',
  standalone: true,
  imports: [JobFeedComponent],
  templateUrl: './notebook.component.html',
  styleUrl: './notebook.component.less',
})
export class NotebookComponent {}
