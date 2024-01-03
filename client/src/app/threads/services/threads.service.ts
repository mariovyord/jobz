import { Injectable } from '@angular/core';
import { Thread } from '../types/thread.type';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from '../../shared/services/api/api.service';

@Injectable()
export class ThreadsService extends ApiService<Thread> {
  override getPath(): string {
    return 'thread';
  }

  public getAllThreads$(): Observable<Thread[]> {
    return this.getAll$();
  }

  public getThreadById$(threadId: string): Observable<Thread> {
    return this.getOne$(threadId);
  }
}
