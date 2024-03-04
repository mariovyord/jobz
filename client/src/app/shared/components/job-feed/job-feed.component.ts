import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { JobCardComponent } from '../job-card/job-card.component';
import { IJob } from '@shared/interfaces/job';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@Component({
  selector: 'app-job-feed',
  standalone: true,
  imports: [JobCardComponent, NgxSkeletonLoaderModule],
  templateUrl: './job-feed.component.html',
  styleUrl: './job-feed.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JobFeedComponent {
  @Input() public mode: 'job' | 'edu' = 'job';
  @Input({ required: true }) public jobs: IJob[] | null;
  @Input({ required: true }) public isLoading: boolean;
}
