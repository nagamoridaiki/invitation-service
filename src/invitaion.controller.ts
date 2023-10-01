import { Controller, Get } from '@nestjs/common';
import { InvitationService } from './invitation.service';
import {
  GetInvitationRequest,
  GetInvitationResponse
} from '../node_modules/@nagamoridaiki/invitation-proto/invitation_pb';
import * as methods from './domain/methods';

@Controller()
export class InvitationController {
  constructor(private readonly invitationService: InvitationService) {}

  async GetInvitation(
    request: GetInvitationRequest,
  )
  //: Promise<GetInvitationResponse>
  {
    return methods.GetInvitation(this.invitationService, request)
  }
}
