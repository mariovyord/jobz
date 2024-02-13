import { Component, Input, OnInit } from '@angular/core';
import { JobCardComponent } from '../job-card/job-card.component';
import { IJob } from '../../types/job';

@Component({
  selector: 'app-job-feed',
  standalone: true,
  imports: [JobCardComponent],
  templateUrl: './job-feed.component.html',
  styleUrl: './job-feed.component.less',
})
export class JobFeedComponent {
  @Input() public mode: 'job' | 'edu' = 'job';
  @Input() public jobs: IJob[] | null;
}
