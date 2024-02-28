import { Component, OnInit } from '@angular/core';
import { CompanyHeaderComponent } from '../../../../shared/components/company-header/company-header.component';
import { JobFeedComponent } from '../../../../shared/components/job-feed/job-feed.component';
import { Observable, tap } from 'rxjs';
import { IJob } from '../../../../shared/types/job';
import { JobsService } from '../../../../shared/services/jobs/jobs.service';
import { CommonModule } from '@angular/common';
import { ICompany } from '../../../../shared/types/company';
import { ActivatedRoute } from '@angular/router';
import { CompaniesService } from '../company-details/services/companies.service';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@Component({
  selector: 'app-company-jobs',
  standalone: true,
  imports: [
    JobFeedComponent,
    CompanyHeaderComponent,
    CommonModule,
    NgxSkeletonLoaderModule
  ],
  templateUrl: './company-jobs.component.html',
  styleUrl: './company-jobs.component.less'
})
export class CompanyJobsComponent implements OnInit {
  public jobs$: Observable<IJob[]>;
  public company$: Observable<ICompany>;
  public isLoadingCompany = true;
  public isLoadingJobs = true;

  constructor(
    private jobsService: JobsService,
    private companiesService: CompaniesService,
    private route: ActivatedRoute
  ) {}

  public ngOnInit(): void {
    const companyId = this.route.snapshot.paramMap.get('companyId');

    this.company$ = this.companiesService
      .getCompanyById$(companyId)
      .pipe(tap(() => (this.isLoadingCompany = false)));

    this.jobs$ = this.jobsService
      .getAllJobsByCompanyId$(companyId)
      .pipe(tap(() => (this.isLoadingJobs = false)));
  }
}
