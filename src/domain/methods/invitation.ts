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
	// const invitaion = {
	// 	invitation_id: 1,
	// 	invitation_name: "テスト",
	// 	user_id: 1
	// }

	const { invitationId } = request;
	const invitation = await service.invitaionService.getInvitation({
		invitationId,
	});

	if (!invitation) {
	throw new NotFoundGrpcException(
		`PMCardIllustrator not found for illustrator_id: ${request.invitationId}`,
	);
	}

	const response: GetInvitationResponse = {
		invitation: invitation.toGrpcMessage(),
	  };

	return response
  }