import { ChangeDetectionStrategy, Component } from '@angular/core';
import { JobFeedComponent } from '../../shared/components/job-feed/job-feed.component';

@Component({
  selector: 'app-notebook',
  standalone: true,
  imports: [JobFeedComponent],
  templateUrl: './notebook.component.html',
  styleUrl: './notebook.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotebookComponent {}
