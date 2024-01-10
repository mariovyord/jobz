import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home/home.component';
import { SecondaryNavComponent } from './core/components/secondary-nav/secondary-nav.component';
import { JobsComponent } from './pages/jobs/jobs.component';
import { JobDetailsComponent } from './pages/job-details/job-details.component';
import { JobDetailsNavComponent } from './shared/components/job-details-nav/job-details-nav.component';
import { CompanyDetailsComponent } from './pages/company-details/company-details.component';
import { CompanyJobsComponent } from './pages/company-jobs/company-jobs.component';

export const routes: Routes = [
  {
    path: '',
    component: SecondaryNavComponent,
    children: [
      { path: '', component: HomePageComponent },
      { path: 'jobs', component: JobsComponent },
    ],
  },
  {
    path: 'jobs/:id',
    component: JobDetailsNavComponent,
    children: [
      { path: '', component: JobDetailsComponent },
      { path: 'company', component: CompanyDetailsComponent },
      { path: 'company/jobs', component: CompanyJobsComponent },
    ],
  },
];
