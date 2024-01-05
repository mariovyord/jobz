import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ThreadsService } from './threads/services/threads.service';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'threads',
    providers: [ThreadsService],
    loadChildren: () =>
      import('./threads/threads.routes').then((m) => m.THREADS_ROUTES),
  },
];
