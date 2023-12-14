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
exports.CorePaginateDto = exports.CoreIncludesDto = exports.BaseQueryCoreDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const keys_1 = require("../../../keys");
class BaseQueryCoreDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], BaseQueryCoreDto.prototype, "skip", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Max)(keys_1.MAX_FIND_ALL_LIMIT),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], BaseQueryCoreDto.prototype, "take", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Contains)('|'),
    __metadata("design:type", Array)
], BaseQueryCoreDto.prototype, "orderBy", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], BaseQueryCoreDto.prototype, "include", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], BaseQueryCoreDto.prototype, "search_column", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], BaseQueryCoreDto.prototype, "search", void 0);
exports.BaseQueryCoreDto = BaseQueryCoreDto;
class CoreIncludesDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], CoreIncludesDto.prototype, "include", void 0);
exports.CoreIncludesDto = CoreIncludesDto;
class CorePaginateDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CorePaginateDto.prototype, "count", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CorePaginateDto.prototype, "total", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CorePaginateDto.prototype, "hasMany", void 0);
exports.CorePaginateDto = CorePaginateDto;
//# sourceMappingURL=base-query-core.dto.js.map