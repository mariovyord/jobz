import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  {
    path: 'threads',
    loadChildren: () =>
      import('./threads/threads.routes').then((m) => m.THREADS_ROUTES),
  },
];
