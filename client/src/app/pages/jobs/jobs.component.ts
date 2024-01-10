import { Component } from '@angular/core';
import { FilterBarComponent } from '../../shared/components/filter-bar/filter-bar.component';
import { JobFeedComponent } from '../../shared/components/job-feed/job-feed.component';
import { TopCompaniesComponent } from '../home/components/top-companies/top-companies.component';

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [FilterBarComponent, JobFeedComponent, TopCompaniesComponent],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.less',
})
export class JobsComponent {
  public jobs = new Array(10);
}
