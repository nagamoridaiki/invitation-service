import { Controller, Get } from '@nestjs/common';
import { InvitationService } from '@/invitation.service';
import {
  GetInvitationRequest,
  GetInvitationResponse,
  invitationServiceControllerMethods
} from '@nagamoridaiki/invitation-proto/gen/ts/invitation';
import * as methods from '@/domain/methods';

@Controller()
@invitationServiceControllerMethods()
export class InvitationController {
  constructor(private readonly invitationService: InvitationService) {}

  async GetInvitation(
    request: GetInvitationRequest,
  ): Promise<GetInvitationResponse> {
    console.log("テスト2")
    return methods.GetInvitation(this.invitationService, request)
  }
}
