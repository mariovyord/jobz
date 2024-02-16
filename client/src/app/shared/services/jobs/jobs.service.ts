import { Injectable } from '@angular/core';
import { DataService } from '../../../core/services/api/data.service';
import { IJob } from '../../types/job';

// TODO: Add some kind of caching mechanism
@Injectable({
  providedIn: 'root',
})
export class JobsService extends DataService<IJob> {
  override getPath(): string {
    return 'jobs';
  }

  public getJobById$(id: string) {
    return this.getOne$(id);
  }

  public getAllJobs$() {
    return this.getAll$();
  }
}
