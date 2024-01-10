import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SecondaryNavComponent } from './core/components/secondary-nav/secondary-nav.component';
import { JobsComponent } from './pages/jobs/jobs.component';
import { JobDetailsComponent } from './pages/job-details/job-details.component';
import { JobDetailsNavComponent } from './shared/components/job-details-nav/job-details-nav.component';
import { CompanyDetailsComponent } from './pages/company-details/company-details.component';
import { CompanyJobsComponent } from './pages/company-jobs/company-jobs.component';
import { NotebookComponent } from './pages/notebook/notebook.component';
import { HistoryComponent } from './pages/history/history.component';
import { EducationComponent } from './pages/education/education.component';
import { TrendsComponent } from './pages/trends/trends.component';
import { BlogComponent } from './pages/blog/blog.component';
import { PollsComponent } from './pages/polls/polls.component';

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
