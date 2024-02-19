import { Injectable } from '@angular/core';
import { DataService } from '../../../core/services/api/data.service';
import { IJob } from '../../types/job';
import { of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JobsService extends DataService<IJob> {
  private jobsCache = new Map();

  override getPath(): string {
    return 'jobs';
  }

  public getJobById$(companyId: string | null) {
    if (!companyId) {
      throw new Error('Job ID is invalid');
    }

    const cached = this.jobsCache.get(companyId);

    if (cached) {
      return of(cached);
    }

    return this.getOne$(companyId).pipe(
      tap((j) => {
        this.jobsCache.set(companyId, j);
      })
    );
  }

  public getAllJobs$() {
    return this.getAll$().pipe(
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

    return this.getAll$().pipe(
      tap((j) => {
        j.forEach((v: IJob) => {
          this.jobsCache.set(v.id, v);
        });
      })
    );
  }
}
