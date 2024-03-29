import { Injectable } from '@angular/core';
import { DataService } from '../../../core/services/api/data.service';
import { IJob } from '@shared/interfaces/job';
import { Observable, of, tap } from 'rxjs';
import { Params } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class JobsService extends DataService<IJob> {
  private jobsCache = new Map();
  private jobsCountCache: number;
  private jobsCountTodayCache: number;

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

  public getAllJobs$(params: Params): Observable<IJob[]> {
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

  public getAllJobsCount$(): Observable<number> {
    if (typeof this.jobsCountCache === 'number') {
      return of(this.jobsCountCache);
    }

    return this.getCount$().pipe(tap((n) => (this.jobsCountCache = n)));
  }

  public getAllJobsCountToday$(): Observable<number> {
    if (typeof this.jobsCountTodayCache === 'number') {
      return of(this.jobsCountTodayCache);
    }

    return this.getCount$({ published: 'today' }).pipe(
      tap((n) => (this.jobsCountTodayCache = n))
    );
  }
}
