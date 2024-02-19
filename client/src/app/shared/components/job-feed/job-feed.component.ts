import { Component, Input, OnInit } from '@angular/core';
import { JobCardComponent } from '../job-card/job-card.component';
import { IJob } from '../../types/job';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@Component({
  selector: 'app-job-feed',
  standalone: true,
  imports: [JobCardComponent, NgxSkeletonLoaderModule],
  templateUrl: './job-feed.component.html',
  styleUrl: './job-feed.component.less',
})
export class JobFeedComponent {
  @Input() public mode: 'job' | 'edu' = 'job';
  @Input({ required: true }) public jobs: IJob[] | null;
  @Input({ required: true }) public isLoading: boolean;
}
