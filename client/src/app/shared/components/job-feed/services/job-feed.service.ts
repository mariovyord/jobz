import { Injectable } from '@angular/core';
import { ApiService } from '../../../../core/services/api/api.service';
import { IJob } from '../../../types/job';

@Injectable({
  providedIn: 'root',
})
export class JobFeedService extends ApiService<IJob> {
  override getPath(): string {
    return 'jobs';
  }
}
