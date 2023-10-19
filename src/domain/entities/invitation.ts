import { Invitation } from '@nagamoridaiki/invitation-proto/gen/ts/invitation';

export class InvitationEntity {
	readonly invitationId: number; /* 招待者ID */
	readonly invitationName: string; /* 招待者名 */
	readonly userId: number; /* ユーザーID */

	constructor(data: any) {
		this.invitationId = data.invitation_id;
		this.invitationName = data.invitation_name;
		this.userId = data.user_id;
	}

	toGrpcMessage(): Invitation {
		const { invitationId, invitationName, userId } = this;
		return {
			invitationId,
			invitationName,
			userId
		};
	}
}