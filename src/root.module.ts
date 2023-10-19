import { Module } from '@nestjs/common';
import { GrpcReflectionModule } from 'nestjs-grpc-reflection';
import { getConfig } from './config';
import { InfraModule } from './infra/infra.module';
import { InvitationModule } from './invitation.module';

@Module({
  imports: [
    GrpcReflectionModule.register(
      getConfig({ port: process.env.PORT, host: process.env.HOST }),
    ),
    InfraModule,
    InvitationModule,
  ],
})
export class RootModule {}
