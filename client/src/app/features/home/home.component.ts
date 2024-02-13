import { Component } from '@angular/core';
import { SecondaryNavComponent } from '../../core/components/secondary-nav/secondary-nav.component';
import { JobsCountStripComponent } from './components/jobs-count-strip/jobs-count-strip.component';
import { FilterBarComponent } from '../../shared/components/filter-bar/filter-bar.component';
import { TopCompaniesComponent } from './components/top-companies/top-companies.component';
import { JobNewsComponent } from './components/job-news/job-news.component';
import { FiltersService } from '../../shared/services/filters.service';
import { AsyncPipe } from '@angular/common';

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
export class HomeComponent {
  public filters$ = this.filtersService.getAllFiltersByType$();

  constructor(private filtersService: FiltersService) {}
}
