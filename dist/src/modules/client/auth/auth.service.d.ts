import { JwtService } from '@nestjs/jwt';
import { User } from '../auth/dto/user-login.dto';
import { UserCoreService } from 'src/core/user-core/user-core.service';
export declare class AuthService {
    private readonly jwtService;
    private readonly userCoreService;
    constructor(jwtService: JwtService, userCoreService: UserCoreService);
    login(user: User): Promise<{
        user: User;
        access_token: string;
    }>;
}
