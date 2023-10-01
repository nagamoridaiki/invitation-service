import { Catch } from '@nestjs/common';
import { PRISMA_ERROR_CODE } from '../prisma';
import {
  AlreadyExistsGrpcException,
  InvalidArgumentGrpcException,
  InternalGrpcException,
  NotFoundGrpcException,
  FailedPreconditionException,
} from '../exceptions/grpc';
import { BaseRpcExceptionFilter, RpcException } from '@nestjs/microservices';
import { Prisma } from '@prisma/client';
import { Observable, throwError } from 'rxjs';

@Catch(Prisma.PrismaClientKnownRequestError)
export class PrismaExceptionsFilter extends BaseRpcExceptionFilter {
  catch(exception: RpcException): Observable<any> {
    if (exception instanceof Prisma.PrismaClientKnownRequestError) {
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
    }
    return throwError(() => exception.getError());
  }
}
