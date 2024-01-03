import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'threads',
    loadChildren: () =>
      import('./threads/threads.routes').then((m) => m.THREADS_ROUTES),
  },
  { path: '**', redirectTo: '/' },
];
