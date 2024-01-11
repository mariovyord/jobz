import { Component, OnInit, inject } from '@angular/core';
import { FilterBarComponent } from '../../shared/components/filter-bar/filter-bar.component';
import { JobFeedComponent } from '../../shared/components/job-feed/job-feed.component';
import { TopCompaniesComponent } from '../home/components/top-companies/top-companies.component';
import { BreakpointObserver, LayoutModule } from '@angular/cdk/layout';
import { AsyncPipe } from '@angular/common';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { ResponsiveService } from '../../shared/services/responsive.service';
import { FiltersService } from '../../shared/services/filters.service';

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
export class JobsComponent {
  public filters$ = this.filtersService.getJobFilters$();
  public jobs = new Array(10);
  public isSmallScreen$ = this.responsiveService.isSmallScreen$;

  constructor(
    private responsiveService: ResponsiveService,
    private filtersService: FiltersService
  ) {}
}
