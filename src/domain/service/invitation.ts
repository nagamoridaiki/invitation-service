import { PrismaService } from '../../infra/storage/prisma/prisma.service';
import { InvitationEntity } from '../entities/invitation'

export class InvitaionService {
constructor(private readonly prismaService: PrismaService) {}

	async getInvitation(params: {
		invitationId: number;
	}): Promise<InvitationEntity | null> {
		const { invitationId } = params;

		const result = await this.prismaService.invitation.findUnique({
		where: {
			invitation_id: invitationId,
		},
		});

		return result ? new InvitationEntity(result) : null;
	}
}