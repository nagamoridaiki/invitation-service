import { status } from '@grpc/grpc-js';
import { GrpcExceptionBase } from './base';

export class InternalGrpcException extends GrpcExceptionBase {
  constructor(msg?: string) {
    super(status.INTERNAL, msg);
  }
}

export class NotFoundGrpcException extends GrpcExceptionBase {
  constructor(msg?: string) {
    super(status.NOT_FOUND, msg);
  }
}

export class UnauthenticatedGrpcException extends GrpcExceptionBase {
  constructor(msg?: string) {
    super(status.UNAUTHENTICATED, msg);
  }
}

export class AlreadyExistsGrpcException extends GrpcExceptionBase {
  constructor(msg?: string) {
    super(status.ALREADY_EXISTS, msg);
  }
}

export class UnknownGrpcException extends GrpcExceptionBase {
  constructor(msg?: string) {
    super(status.UNKNOWN, msg);
  }
}

export class ResourceExhaustedGrpcException extends GrpcExceptionBase {
  constructor(msg?: string) {
    super(status.RESOURCE_EXHAUSTED, msg);
  }
}

export class InvalidArgumentGrpcException extends GrpcExceptionBase {
  constructor(msg?: string) {
    super(status.INVALID_ARGUMENT, msg);
  }
}

export class UnimplementedGrpcException extends GrpcExceptionBase {
  constructor(msg?: string) {
    super(status.UNIMPLEMENTED, msg);
  }
}

export class FailedPreconditionException extends GrpcExceptionBase {
  constructor(msg?: string) {
    super(status.FAILED_PRECONDITION, msg);
  }
}
