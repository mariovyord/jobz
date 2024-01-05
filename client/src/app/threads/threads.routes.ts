import { Routes } from '@angular/router';
import { ThreadsComponent } from './threads.component';
import { ThreadDetailsComponent } from './components/thread-details/thread-details.component';

export const THREADS_ROUTES: Routes = [
  { path: '', component: ThreadsComponent },
  { path: ':id', component: ThreadDetailsComponent },
];
