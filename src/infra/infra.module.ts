import { Module } from '@nestjs/common';
import { PrismaModule } from './storage/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
})
export class InfraModule {}
