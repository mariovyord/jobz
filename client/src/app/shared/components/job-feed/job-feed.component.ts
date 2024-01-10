import { Component } from '@angular/core';
import { JobCardComponent } from '../job-card/job-card.component';

@Component({
  selector: 'app-job-feed',
  standalone: true,
  imports: [JobCardComponent],
  templateUrl: './job-feed.component.html',
  styleUrl: './job-feed.component.less',
})
export class JobFeedComponent {}
