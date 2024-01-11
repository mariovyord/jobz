import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { SecondaryNavComponent } from './core/components/secondary-nav/secondary-nav.component';
import { JobsComponent } from './features/jobs/jobs.component';
import { JobDetailsComponent } from './features/job-details/job-details.component';
import { JobDetailsNavComponent } from './shared/components/job-details-nav/job-details-nav.component';
import { CompanyDetailsComponent } from './features/company-details/company-details.component';
import { CompanyJobsComponent } from './features/company-jobs/company-jobs.component';
import { NotebookComponent } from './features/notebook/notebook.component';
import { HistoryComponent } from './features/history/history.component';
import { EducationComponent } from './features/education/education.component';
import { TrendsComponent } from './features/trends/trends.component';
import { BlogComponent } from './features/blog/blog.component';
import { PollsComponent } from './features/polls/polls.component';

export const routes: Routes = [
  {
    path: '',
    component: SecondaryNavComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'jobs', component: JobsComponent },
      { path: 'education', component: EducationComponent },
      { path: 'trends', component: TrendsComponent },
      { path: 'polls', component: PollsComponent },
      { path: 'blog', component: BlogComponent },
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
  {
    path: 'my-jobs',
    component: NotebookComponent,
  },
  {
    path: 'history',
    component: HistoryComponent,
  },
];
