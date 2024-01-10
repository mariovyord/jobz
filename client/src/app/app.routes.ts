import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home/home.component';
import { SecondaryNavComponent } from './core/components/secondary-nav/secondary-nav.component';
import { JobsComponent } from './pages/jobs/jobs.component';
import { JobDetailsComponent } from './pages/job-details/job-details.component';
import { JobDetailsNavComponent } from './pages/job-details/components/job-details-nav/job-details-nav.component';
import { JobDetailsDescriptionComponent } from './pages/job-details/components/job-details-description/job-details-description.component';

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
      { path: 'company', component: JobDetailsComponent },
      { path: 'all-company-jobs', component: JobDetailsComponent },
    ],
  },
];
