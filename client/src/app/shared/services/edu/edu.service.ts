import { Injectable } from '@angular/core';
import { JobsService } from '../jobs/jobs.service';

@Injectable({
  providedIn: 'root',
})
export class EduService extends JobsService {
  override getPath(): string {
    return 'edu';
  }
}
