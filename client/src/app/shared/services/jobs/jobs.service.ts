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

  public getJobById$(id: string | null) {
    if (!id) {
      throw new Error('Job ID is invalid');
    }
    debugger;
    const cached = this.jobsCache.get(id);

    if (cached) {
      return of(cached);
    }

    return this.getOne$(id).pipe(
      tap((j) => {
        this.jobsCache.set(id, j);
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
}
