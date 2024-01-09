import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home/home.component';
import { SecondaryNavComponent } from './core/components/secondary-nav/secondary-nav.component';

export const routes: Routes = [
  {
    path: '',
    component: SecondaryNavComponent,
    children: [{ path: '', component: HomePageComponent }],
  },
];
