import { RpcException } from '@nestjs/microservices';
import { status } from '@grpc/grpc-js';

export class GrpcExceptionBase extends RpcException {
  constructor(code: status, message?: string) {
    super({ message, code });

    // Hack
    // @ts-ignore
    this.code = code;
  }
}
