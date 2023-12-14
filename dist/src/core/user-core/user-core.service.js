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
exports.UserCoreService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../shared/modules/prisma/prisma.service");
const prisma_base_repository_1 = require("../../shared/libs/prisma-base.repository");
const user_keys_1 = require("../../shared/keys/user.keys");
let UserCoreService = class UserCoreService extends prisma_base_repository_1.PrismaBaseRepository {
    constructor(prisma) {
        super(prisma.user, {
            NOT_FOUND: user_keys_1.UserMessages.NOT_FOUND,
            DELETED: user_keys_1.UserMessages.DELETED,
        });
        this.prisma = prisma;
    }
};
UserCoreService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UserCoreService);
exports.UserCoreService = UserCoreService;
//# sourceMappingURL=user-core.service.js.map