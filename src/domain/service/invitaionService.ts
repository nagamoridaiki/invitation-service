import { PrismaService } from '../../infra/storage/prisma/prisma.service';

export class InvitaionService {
constructor(private readonly prismaService: PrismaService) {}

	async getInvitation(params: {
		regulationId: number;
	  })
	  //: Promise<PMCardRegulationEntity | null>
	  {
		const invitaion = {
			invitation_id: 1,
			invitation_name: "テスト",
			user_id: 1
		}

		return invitaion
	}
}