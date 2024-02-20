import { Injectable } from '@angular/core';
import { DataService } from '../../../core/services/api/data.service';
import { IJob } from '../../types/job';
import { of, tap } from 'rxjs';
import { Params } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class JobsService extends DataService<IJob> {
  private jobsCache = new Map();

  override getPath(): string {
    return 'jobs';
  }

  public getJobById$(jobId: string | null) {
    if (!jobId) {
      throw new Error('Job ID is invalid');
    }

    const cached = this.jobsCache.get(jobId);

    if (cached) {
      return of(cached);
    }

    return this.getOne$(jobId).pipe(
      tap((j) => {
        this.jobsCache.set(jobId, j);
      })
    );
  }

  public getAllJobs$(params: Params) {
    return this.getAll$(params).pipe(
      tap((j) => {
        j.forEach((v: IJob) => {
          this.jobsCache.set(v.id, v);
        });
      })
    );
  }

  public getAllJobsByCompanyId$(companyId: string | null) {
    if (!companyId) {
      throw new Error('Company ID is invalid');
    }
    return this.getAll$({ companyId }).pipe(
      tap((j) => {
        j.forEach((v: IJob) => {
          this.jobsCache.set(v.id, v);
        });
      })
    );
  }
}
