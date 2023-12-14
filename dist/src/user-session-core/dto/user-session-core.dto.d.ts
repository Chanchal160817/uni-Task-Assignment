import { UserSession } from '@prisma/client';
import { CorePaginateDto } from 'src/core/base-query-core/dto/base-query-core.dto';
export declare class UserSessionCorePaginateDto extends CorePaginateDto {
    list?: UserSession[];
}
