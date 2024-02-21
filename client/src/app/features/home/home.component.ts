import { Component, NgZone, OnInit } from '@angular/core';
import { SecondaryNavComponent } from '../../core/components/secondary-nav/secondary-nav.component';
import { JobsCountStripComponent } from './components/jobs-count-strip/jobs-count-strip.component';
import { FilterBarComponent } from '../../shared/components/filter-bar/filter-bar.component';
import { TopCompaniesComponent } from './components/top-companies/top-companies.component';
import { JobNewsComponent } from './components/job-news/job-news.component';
import { FiltersService } from '../../shared/services/filters.service';
import { AsyncPipe } from '@angular/common';
import { JobsService } from '../../shared/services/jobs/jobs.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SecondaryNavComponent,
    JobsCountStripComponent,
    FilterBarComponent,
    TopCompaniesComponent,
    JobNewsComponent,
    AsyncPipe,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.less',
})
export class HomeComponent implements OnInit {
  public filters$ = this.filtersService.getAllFiltersByType$();
  public jobsCount$ = new BehaviorSubject(0);
  public jobsCountToday$ = new BehaviorSubject(0);

  constructor(
    private filtersService: FiltersService,
    private jobsService: JobsService,
    private ngZone: NgZone
  ) {}

  ngOnInit(): void {
    this.updateJobsCount(this.jobsService.getAllJobsCount$(), this.jobsCount$);
    this.updateJobsCount(
      this.jobsService.getAllJobsCountToday$(),
      this.jobsCountToday$
    );
  }

  private updateJobsCount(
    countObservable$: Observable<number>,
    target$: BehaviorSubject<number>
  ): void {
    countObservable$.subscribe((count: number) => {
      this.ngZone.runOutsideAngular(() => {
        const intervalId = setInterval(() => {
          let current = target$.value;
          if (current < count) {
            this.ngZone.run(() => {
              target$.next(current + 1);
            });
          } else {
            clearInterval(intervalId);
          }
        }, 1);
      });
    });
  }
}
