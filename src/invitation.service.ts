import { Injectable } from '@nestjs/common';
import { PrismaService } from './infra/storage/prisma/prisma.service';
import { InvitaionService } from './domain/service/invitation'

@Injectable()
export class InvitationService {
	public invitaionService: InvitaionService;

	constructor(private readonly prismaService: PrismaService) {
		this.invitaionService = new InvitaionService(prismaService);
	}
}
