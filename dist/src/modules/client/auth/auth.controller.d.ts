import { AuthService } from './auth.service';
import { User } from '../auth/dto/user-login.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(user: User): Promise<{
        user: User;
        access_token: string;
    }>;
}
