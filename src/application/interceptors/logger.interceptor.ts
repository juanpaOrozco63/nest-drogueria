import { CallHandler, ExecutionContext, Injectable, Logger, NestInterceptor } from '@nestjs/common';
import { Observable, tap } from 'rxjs';

@Injectable()
export class LoggerInterceptor implements NestInterceptor {
  private readonly logger = new Logger(LoggerInterceptor.name);
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    this.logger.log(`Interceptor Request to: ${request.url}`);

    const now = Date.now();
    return next.handle().pipe(
      tap(() => this.logger.log(`Interceptor Response sent after ${Date.now() - now}ms`)),
    );
  }
}
