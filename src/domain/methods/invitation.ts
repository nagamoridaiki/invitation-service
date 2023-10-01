import { InvitationService } from '../../invitation.service';
import {
	GetInvitationRequest,
	GetInvitationResponse
  } from '../../../node_modules/@nagamoridaiki/invitation-proto/invitation_pb';

export const GetInvitation = async (
	service: InvitationService,
	request: GetInvitationRequest,
  ) => {
	const invitaion = {
		invitation_id: 1,
		invitation_name: "テスト",
		user_id: 1
	}

	return invitaion
  }