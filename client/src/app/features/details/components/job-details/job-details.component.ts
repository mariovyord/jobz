import { Component, OnInit } from '@angular/core';
import { JobDetailsDescriptionComponent } from './components/job-details-description/job-details-description.component';
import { JobDetailsSidecompanyComponent } from './components/job-details-sidecompany/job-details-sidecompany.component';
import { JobDetailsSideinfoComponent } from './components/job-details-sideinfo/job-details-sideinfo.component';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import {
  BehaviorSubject,
  Observable,
  debounce,
  debounceTime,
  delay,
  finalize,
  interval,
  tap,
  throttle,
  throttleTime,
} from 'rxjs';
import { CommonModule } from '@angular/common';
import { IJob } from '../../../../shared/types/job';
import { JobsService } from '../../../../shared/services/jobs/jobs.service';

@Component({
  selector: 'app-job-details',
  standalone: true,
  imports: [
    JobDetailsDescriptionComponent,
    JobDetailsSidecompanyComponent,
    JobDetailsSideinfoComponent,
    MatButtonModule,
    RouterModule,
    MatIconModule,
    CommonModule,
  ],
  templateUrl: './job-details.component.html',
  styleUrl: './job-details.component.less',
})
export class JobDetailsComponent implements OnInit {
  public job$: Observable<IJob>;
  public isLoading$ = new BehaviorSubject(true);

  constructor(
    private jobsService: JobsService,
    private route: ActivatedRoute
  ) {}

  public ngOnInit(): void {
    const jobId = this.route.snapshot.paramMap.get('jobId');
    this.job$ = this.jobsService
      .getJobById$(jobId)
      .pipe(tap(() => this.isLoading$.next(false)));
  }
}
