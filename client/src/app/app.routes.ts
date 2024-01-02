import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/threads' },
  {
    path: 'threads',
    loadChildren: () =>
      import('./threads/threads.routes').then((m) => m.THREADS_ROUTES),
  },
];
