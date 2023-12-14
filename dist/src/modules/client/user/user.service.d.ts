import { UserCoreService } from 'src/core/user-core/user-core.service';
import { UserLogInDto, UserRegistrationDto } from './dto/user-registration.dto';
import { JwtService } from '@nestjs/jwt';
export declare class UserService {
    private userCoreService;
    private readonly jwtService;
    constructor(userCoreService: UserCoreService, jwtService: JwtService);
    registerUser(userRegistrationDto: UserRegistrationDto): Promise<import(".prisma/client").User>;
    login(user: UserLogInDto): Promise<{
        user: UserLogInDto;
        access_token: string;
    }>;
    getMe(param: {
        sessionData: any;
    }): Promise<import(".prisma/client").User>;
    joke(): Promise<any>;
    logOut(param: {
        token: any;
    }): Promise<string>;
    getMergedProducts(): Promise<any[]>;
}
