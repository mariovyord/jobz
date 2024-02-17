import { ActivatedRouteSnapshot } from '@angular/router';
import { Observable, mergeMap, of } from 'rxjs';
import { IJob } from '../../../shared/types/job';
import { inject } from '@angular/core';
import { JobsService } from '../../../shared/services/jobs/jobs.service';
import { ICompany } from '../../../shared/types/company';

export function JobResolver(
  route: ActivatedRouteSnapshot
): Observable<{ job: IJob; company: ICompany }> {
  const userService = inject(JobsService);
  const jobId = route.paramMap.get('jobId');

  return userService.getJobById$(jobId).pipe(
    mergeMap((j) =>
      of({
        job: j,
        company: j.company,
      })
    )
  );
}
