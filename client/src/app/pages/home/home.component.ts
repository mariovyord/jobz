import { Component } from '@angular/core';
import { SecondaryNavComponent } from '../../core/components/secondary-nav/secondary-nav.component';
import { JobsCountStripComponent } from './components/jobs-count-strip/jobs-count-strip.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SecondaryNavComponent, JobsCountStripComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.less',
})
export class HomePageComponent {}
