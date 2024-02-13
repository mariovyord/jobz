import { Injectable } from '@angular/core';
import { DataService } from '../../../core/services/api/data.service';
import { IJob } from '../../types/job';

@Injectable({
  providedIn: 'root',
})
export class JobsService extends DataService<IJob> {
  override getPath(): string {
    return 'jobs';
  }

  public getJob$(id: string) {
    return this.getOne$(id);
  }

  public getAllJobs$() {
    return this.getAll$();
  }
}
