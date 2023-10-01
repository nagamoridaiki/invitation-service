import { PRISMA_ERROR_CODE } from '../prisma';
import {
  AlreadyExistsGrpcException,
  InvalidArgumentGrpcException,
  InternalGrpcException,
  NotFoundGrpcException,
  FailedPreconditionException,
} from '../exceptions/grpc';
import { BaseRpcExceptionFilter } from '@nestjs/microservices';
import { Observable, throwError } from 'rxjs';

export class PrismaExceptionsFilter extends BaseRpcExceptionFilter {
  catch(exception): Observable<any> {
    const { code } = exception;
      if (code === PRISMA_ERROR_CODE.UNIQUE_CONSTRAINT_FAILED) {
        return throwError(() => new AlreadyExistsGrpcException());
      } else if (code === PRISMA_ERROR_CODE.COLUMN_VALUE_TOO_LONG) {
        return throwError(() => new InvalidArgumentGrpcException());
      } else if (code === PRISMA_ERROR_CODE.FOREIGN_KEY_CONSTRAINT_FAILED) {
        return throwError(() => new FailedPreconditionException());
      } else if (code === PRISMA_ERROR_CODE.NOT_FOUND_ERR) {
        return throwError(() => new NotFoundGrpcException());
      } else {
        // TODO: send error log
        console.log(`PrismaExceptionsFilter: ${code}`);
        return throwError(() => new InternalGrpcException());
      }
    return throwError(() => exception.getError());
  }
}
