import { Component } from '@angular/core';
import { JobDetailsDescriptionComponent } from './components/job-details-description/job-details-description.component';
import { JobDetailsNavComponent } from './components/job-details-nav/job-details-nav.component';
import { JobDetailsSidecompanyComponent } from './components/job-details-sidecompany/job-details-sidecompany.component';
import { JobDetailsSideinfoComponent } from './components/job-details-sideinfo/job-details-sideinfo.component';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-job-details',
  standalone: true,
  imports: [
    JobDetailsDescriptionComponent,
    JobDetailsNavComponent,
    JobDetailsSidecompanyComponent,
    JobDetailsSideinfoComponent,
    MatButtonModule,
    RouterModule,
    MatIconModule,
  ],
  templateUrl: './job-details.component.html',
  styleUrl: './job-details.component.less',
})
export class JobDetailsComponent {}
