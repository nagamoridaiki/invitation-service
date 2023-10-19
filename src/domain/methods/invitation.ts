import { InvitationService } from '@/invitation.service';
import {
	GetInvitationRequest,
	GetInvitationResponse
} from '@nagamoridaiki/invitation-proto/gen/ts/invitation';
import {
InternalGrpcException,
NotFoundGrpcException,
} from '@/exceptions/grpc';
  //import { InvitaionService } from '../service/invitation';

export const GetInvitation = async (
	service: InvitationService,
	request: GetInvitationRequest,
  ):Promise<GetInvitationResponse> => {

	const { invitationId } = request;
	const invitation = await service.invitaionService.getInvitation({
		invitationId,
	});

	if (!invitation) {
	throw new NotFoundGrpcException(
		`Invitation not found for invitation_id: ${request.invitationId}`,
	);
	}

	const response: GetInvitationResponse = {
		invitation: invitation.toGrpcMessage(),
	  };

	return response
  }