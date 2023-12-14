"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const decorators_1 = require("@nestjs/common/decorators");
const swagger_1 = require("@nestjs/swagger");
const user_service_1 = require("./user.service");
const user_registration_dto_1 = require("./dto/user-registration.dto");
const jwt_auth_guard_1 = require("../auth/guard/jwt-auth.guard");
const get_user_session_decorator_1 = require("../../../shared/decorators/get-user-session.decorator");
const passport_1 = require("@nestjs/passport");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    async registerUser(userRegistrationDto) {
        return await this.userService.registerUser(userRegistrationDto);
    }
    async loginUser(user) {
        return await this.userService.login(user);
    }
    async User(sessionData) {
        console.log(sessionData);
        return await this.userService.getMe({ sessionData });
    }
    async Joke() {
        return await this.userService.joke();
    }
    async logout(request) {
        const authHeader = request.headers.authorization;
        const token = authHeader ? authHeader.split(' ')[1] : null;
        return await this.userService.logOut({ token });
    }
    async data() {
        return await this.userService.getMergedProducts();
    }
};
__decorate([
    (0, common_1.Post)('register'),
    (0, swagger_1.ApiOperation)({ summary: 'Register a new user' }),
    __param(0, (0, decorators_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_registration_dto_1.UserRegistrationDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "registerUser", null);
__decorate([
    (0, common_1.Post)('login'),
    (0, swagger_1.ApiOperation)({ summary: 'Login User' }),
    __param(0, (0, decorators_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_registration_dto_1.UserLogInDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "loginUser", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, decorators_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, decorators_1.Get)('user/me'),
    (0, swagger_1.ApiOperation)({ summary: 'Get login user' }),
    __param(0, (0, get_user_session_decorator_1.GetUserSession)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "User", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, decorators_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, decorators_1.Get)('random-joke'),
    (0, swagger_1.ApiOperation)({ summary: 'Get login user' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "Joke", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, decorators_1.UseGuards)(jwt_auth_guard_1.AtGuard),
    (0, decorators_1.Get)('logOut'),
    (0, swagger_1.ApiOperation)({ summary: 'User Logout' }),
    __param(0, (0, decorators_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "logout", null);
__decorate([
    (0, decorators_1.Get)('data'),
    (0, swagger_1.ApiOperation)({ summary: 'Test 2 result' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "data", null);
UserController = __decorate([
    (0, swagger_1.ApiTags)('User'),
    (0, common_1.Controller)('api'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map