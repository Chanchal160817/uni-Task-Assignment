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
exports.HttpExceptionBadRequestRO = exports.HttpExceptionUnauthorizedRO = void 0;
const swagger_1 = require("@nestjs/swagger");
class HttpExceptionUnauthorizedRO {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Status code',
        example: 401,
    }),
    __metadata("design:type", Number)
], HttpExceptionUnauthorizedRO.prototype, "statusCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Error message',
        type: 'string',
        example: 'Unauthorized',
    }),
    __metadata("design:type", String)
], HttpExceptionUnauthorizedRO.prototype, "message", void 0);
exports.HttpExceptionUnauthorizedRO = HttpExceptionUnauthorizedRO;
class HttpExceptionBadRequestRO {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Status code',
        example: 400,
    }),
    __metadata("design:type", Number)
], HttpExceptionBadRequestRO.prototype, "statusCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Error message',
        type: 'string',
        example: 'BadRequest',
    }),
    __metadata("design:type", String)
], HttpExceptionBadRequestRO.prototype, "message", void 0);
exports.HttpExceptionBadRequestRO = HttpExceptionBadRequestRO;
//# sourceMappingURL=httpException.ro.js.map