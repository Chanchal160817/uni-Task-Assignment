import { UserService } from './user.service';
import { UserLogInDto, UserRegistrationDto } from './dto/user-registration.dto';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    registerUser(userRegistrationDto: UserRegistrationDto): Promise<import(".prisma/client").User>;
    loginUser(user: UserLogInDto): Promise<{
        user: UserLogInDto;
        access_token: string;
    }>;
    User(sessionData: any): Promise<import(".prisma/client").User>;
    Joke(): Promise<any>;
    logout(request: any): Promise<string>;
    data(): Promise<any[]>;
}
