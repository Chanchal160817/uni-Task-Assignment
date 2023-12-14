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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const user_core_service_1 = require("../../../core/user-core/user-core.service");
const bcrypt = require("bcrypt");
const user_keys_1 = require("../../../shared/keys/user.keys");
let AuthService = class AuthService {
    constructor(jwtService, userCoreService) {
        this.jwtService = jwtService;
        this.userCoreService = userCoreService;
    }
    async login(user) {
        const existingUser = await this.userCoreService.findFirst({
            where: {
                email: user.email,
            },
        });
        if (!existingUser) {
            throw new common_1.BadRequestException(user_keys_1.UserMessages.NOT_FOUND);
        }
        const isPasswordValid = await bcrypt.compare(user.password, existingUser.password);
        if (!isPasswordValid) {
            throw new common_1.BadRequestException(user_keys_1.UserMessages.NOT_FOUND);
        }
        const payload = { sub: existingUser.id, email: existingUser.email };
        const access_token = this.jwtService.sign(payload);
        console.log(access_token);
        const result = Object.assign(Object.assign({}, existingUser), { token: access_token });
        return {
            user: existingUser,
            access_token,
        };
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        user_core_service_1.UserCoreService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map