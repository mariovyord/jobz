import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, of } from 'rxjs';

@Injectable()
export class SetUserIdInterceptor implements NestInterceptor {
  public intercept(
    _context: ExecutionContext,
    $next: CallHandler,
  ): Observable<any> {
    const request: any = _context.switchToHttp().getRequest();
    request.body.userId = request.user.userId;
    return of($next);
  }
}
