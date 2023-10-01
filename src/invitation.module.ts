import { Module } from '@nestjs/common';
import { InvitationController } from './invitaion.controller';
import { InvitationService } from './invitation.service';

@Module({
  providers: [InvitationService],
  controllers: [InvitationController],
})
export class InvitationModule {}
