import { Component, OnInit, inject } from '@angular/core';
import { FilterBarComponent } from '../../shared/components/filter-bar/filter-bar.component';
import { JobFeedComponent } from '../../shared/components/job-feed/job-feed.component';
import { TopCompaniesComponent } from '../home/components/top-companies/top-companies.component';
import { BreakpointObserver, LayoutModule } from '@angular/cdk/layout';
import { AsyncPipe } from '@angular/common';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { ResponsiveService } from '../../shared/services/responsive.service';
import { FiltersService } from '../../shared/services/filters.service';
import { JobsService } from '../../shared/services/jobs/jobs.service';
import {
  BehaviorSubject,
  Observable,
  catchError,
  finalize,
  mergeMap,
  of,
  tap,
} from 'rxjs';
import { IJob } from '../../shared/types/job';
import { IFilterByType } from '../../shared/types/filter';
import { ActivatedRoute } from '@angular/router';

@UntilDestroy()
@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [
    FilterBarComponent,
    JobFeedComponent,
    TopCompaniesComponent,
    AsyncPipe,
    LayoutModule,
  ],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.less',
})
export class JobsComponent implements OnInit {
  public filters$: Observable<IFilterByType[]>;
  public jobs$ = new BehaviorSubject<IJob[]>([]);
  public isSmallScreen$ = this.responsiveService.isSmallScreen$;
  public isLoading = true;

  constructor(
    private responsiveService: ResponsiveService,
    private filtersService: FiltersService,
    private jobsService: JobsService,
    private route: ActivatedRoute
  ) {}

  public ngOnInit(): void {
    this.filters$ = this.filtersService.getAllFiltersByType$();

    this.route.queryParams
      .pipe(
        untilDestroyed(this),
        mergeMap((params) => {
          return this.jobsService.getAllJobs$(params).pipe(
            finalize(() => {
              if (this.isLoading) {
                this.isLoading = false;
              }
            })
          );
        })
      )
      .subscribe({
        next: (jobs) => {
          this.jobs$.next(jobs);
        },
        error: (err) => {
          console.error('Error fetching jobs', err);
        },
      });
  }
}
