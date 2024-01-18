import { Component } from '@angular/core';
import { JobFeedComponent } from '../../shared/components/job-feed/job-feed.component';
import { CompanyHeaderComponent } from '../../shared/components/company-header/company-header.component';

@Component({
  selector: 'app-company-jobs',
  standalone: true,
  imports: [JobFeedComponent, CompanyHeaderComponent],
  templateUrl: './company-jobs.component.html',
  styleUrl: './company-jobs.component.less',
})
export class CompanyJobsComponent {}
