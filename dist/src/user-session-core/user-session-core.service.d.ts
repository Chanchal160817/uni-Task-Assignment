import { UserSession, Prisma } from '@prisma/client';
import { PrismaService } from 'src/shared/modules/prisma/prisma.service';
import { PrismaBaseRepository } from 'src/shared/libs/prisma-base.repository';
import { UserSessionCorePaginateDto } from './dto/user-session-core.dto';
export declare class UserSessionCoreService extends PrismaBaseRepository<UserSession, UserSessionCorePaginateDto, Prisma.UserSessionCreateArgs, Prisma.UserSessionUpdateArgs, Prisma.UserSessionUpdateManyArgs, Prisma.UserSessionFindUniqueArgs, Prisma.UserSessionFindFirstArgs, Prisma.UserSessionFindManyArgs, Prisma.UserSessionDeleteArgs, Prisma.UserSessionDeleteManyArgs, Prisma.UserSessionCountArgs> {
    prisma: PrismaService;
    constructor(prisma: PrismaService);
}
