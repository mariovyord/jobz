import { ActivatedRouteSnapshot } from '@angular/router';
import { Observable, mergeMap, of } from 'rxjs';
import { IJob } from '../../../shared/types/job';
import { inject } from '@angular/core';
import { JobsService } from '../../../shared/services/jobs/jobs.service';
import { ICompany } from '../../../shared/types/company';

/**
 * This guard ensures that when navigating the job is loaded
 * and JobsService caches the result
 * then the components can safely call jobsService.getJobById$
 * and use the result without worring about the implementation
 */
export function JobResolver(
  route: ActivatedRouteSnapshot
): Observable<{ job: IJob; company: ICompany }> {
  const jobsService = inject(JobsService);
  const jobId = route.paramMap.get('jobId');

  return jobsService.getJobById$(jobId).pipe(
    mergeMap((j) =>
      of({
        job: j,
        company: j.company
      })
    )
  );
}
