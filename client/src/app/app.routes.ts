import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { SecondaryNavComponent } from './core/components/secondary-nav/secondary-nav.component';
import { JobsComponent } from './features/jobs/jobs.component';
import { NotebookComponent } from './features/notebook/notebook.component';
import { HistoryComponent } from './features/history/history.component';
import { EducationComponent } from './features/education/education.component';
import { TrendsComponent } from './features/trends/trends.component';
import { BlogComponent } from './features/blog/blog.component';
import { PollsComponent } from './features/polls/polls.component';
import { JobDetailsComponent } from './features/details/components/job-details/job-details.component';
import { CompanyDetailsComponent } from './features/details/components/company-details/company-details.component';
import { CompanyJobsComponent } from './features/details/components/company-jobs/company-jobs.component';
import { DetailsComponent } from './features/details/details.component';

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
    component: DetailsComponent,
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
