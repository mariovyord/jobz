import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable, delay } from 'rxjs';

@Injectable()
export class DelayInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    if (process.env.NODE_ENV?.trim() === 'development') {
      return next.handle().pipe(delay(1000)); // 1 second delay
    }

    return next.handle();
  }
}
