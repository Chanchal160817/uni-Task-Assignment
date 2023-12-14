import { User, Prisma } from '@prisma/client';
import { PrismaService } from 'src/shared/modules/prisma/prisma.service';
import { UserCorePaginateDto } from './dto/user-core.dto';
import { PrismaBaseRepository } from 'src/shared/libs/prisma-base.repository';
export declare class UserCoreService extends PrismaBaseRepository<User, UserCorePaginateDto, Prisma.UserCreateArgs, Prisma.UserUpdateArgs, Prisma.UserUpdateManyArgs, Prisma.UserFindUniqueArgs, Prisma.UserFindFirstArgs, Prisma.UserFindManyArgs, Prisma.UserDeleteArgs, Prisma.UserDeleteManyArgs, Prisma.UserCountArgs> {
    prisma: PrismaService;
    constructor(prisma: PrismaService);
}
