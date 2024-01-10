import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-job-details-nav',
  standalone: true,
  imports: [MatTabsModule, RouterModule],
  templateUrl: './job-details-nav.component.html',
  styleUrl: './job-details-nav.component.less',
})
export class JobDetailsNavComponent {
  public activeLink = '/jobs/1';
  public links = [
    {
      url: '/jobs/1',
      title: 'Обява',
    },
    {
      url: '/jobs/1/company',
      title: 'За нас',
    },
    {
      url: '/jobs/1/all-company-jobs',
      title: 'Всички обяви (3)',
    },
  ];
}
