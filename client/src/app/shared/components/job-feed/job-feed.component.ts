import { Component, Input } from '@angular/core';
import { JobCardComponent } from '../job-card/job-card.component';
import { JobFeedService } from './services/job-feed.service';

@Component({
  selector: 'app-job-feed',
  standalone: true,
  imports: [JobCardComponent],
  templateUrl: './job-feed.component.html',
  styleUrl: './job-feed.component.less',
})
export class JobFeedComponent {
  @Input() public mode: 'job' | 'edu' = 'job';

  constructor(private jobFeedService: JobFeedService) {}
}
