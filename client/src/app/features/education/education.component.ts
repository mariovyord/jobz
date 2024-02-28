import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ResponsiveService } from '../../shared/services/responsive.service';
import { FiltersService } from '../../shared/services/filters.service';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Observable, finalize, mergeMap } from 'rxjs';
import { IFilterByType } from '../../shared/types/filter';
import { IJob } from '../../shared/types/job';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { FilterBarComponent } from '../../shared/components/filter-bar/filter-bar.component';
import { JobFeedComponent } from '../../shared/components/job-feed/job-feed.component';
import { TopCompaniesComponent } from '../home/components/top-companies/top-companies.component';
import { AsyncPipe } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
import { EduService } from '../../shared/services/edu/edu.service';

@UntilDestroy()
@Component({
  selector: 'app-education',
  standalone: true,
  imports: [
    FilterBarComponent,
    JobFeedComponent,
    TopCompaniesComponent,
    AsyncPipe,
    LayoutModule
  ],
  templateUrl: './education.component.html',
  styleUrl: './education.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: []
})
export class EducationComponent implements OnInit {
  public filters$: Observable<IFilterByType[]>;
  public jobs$ = new BehaviorSubject<IJob[]>([]);
  public isSmallScreen$ = this.responsiveService.isSmallScreen$;
  public isLoading = true;

  constructor(
    private responsiveService: ResponsiveService,
    private filtersService: FiltersService,
    private eduService: EduService,
    private route: ActivatedRoute
  ) {}

  public ngOnInit(): void {
    this.filters$ = this.filtersService.getAllFiltersByType$();

    this.route.queryParams
      .pipe(
        untilDestroyed(this),
        mergeMap((params) => {
          return this.eduService.getAllJobs$(params).pipe(
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
        }
      });
  }
}
