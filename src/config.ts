import * as path from 'path';
import { addReflectionToGrpcConfig } from 'nestjs-grpc-reflection';
import { Transport, GrpcOptions } from '@nestjs/microservices';

interface ConfigOptions {
  port?: string;
  host?: string;
}

export const getConfig = ({ port, host }: ConfigOptions = {}): GrpcOptions => {
  const _port = typeof port === 'string' ? port : '50052';
  const _host = typeof host === 'string' ? host : '0.0.0.0';

  return addReflectionToGrpcConfig({
    transport: Transport.GRPC,
    options: {
      package: 'invitation',
      protoPath: path.resolve(
        __dirname,
        '../node_modules/@nagamoridaiki/invitation-proto/proto/invitation.proto',
      ),
      url: `${_host}:${_port}`,
      loader: {
        defaults: true,
        longs: String,
        arrays: true,
        objects: true,
        includeDirs: [
          path.resolve(
            __dirname,
            '../node_modules/@nagamoridaiki/invitation-proto/proto',
          ),
        ],
      },
    },
  });
};
