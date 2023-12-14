"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSessionCoreModule = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../shared/modules/prisma/prisma.service");
const user_session_core_service_1 = require("./user-session-core.service");
let UserSessionCoreModule = class UserSessionCoreModule {
};
UserSessionCoreModule = __decorate([
    (0, common_1.Module)({
        providers: [prisma_service_1.PrismaService, user_session_core_service_1.UserSessionCoreService],
        exports: [user_session_core_service_1.UserSessionCoreService],
    })
], UserSessionCoreModule);
exports.UserSessionCoreModule = UserSessionCoreModule;
//# sourceMappingURL=user-session-core.module.js.map