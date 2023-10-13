import { Module } from '@nestjs/common';
import { InvitationController } from './invitation.controller';
import { InvitationService } from './invitation.service';

@Module({
  imports: [],
  controllers: [InvitationController],
  providers: [InvitationService],
})
export class AppModule {}
