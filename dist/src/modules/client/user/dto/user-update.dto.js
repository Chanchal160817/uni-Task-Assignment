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
exports.UserUpdateDto = exports.Location = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const keys_1 = require("../../../../keys");
const custom_validations_decorator_1 = require("../../../../shared/decorators/custom-validations.decorator");
class Location {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], Location.prototype, "location", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], Location.prototype, "latitude", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], Location.prototype, "longitude", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], Location.prototype, "country", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], Location.prototype, "continent", void 0);
exports.Location = Location;
class UserUpdateDto {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UserUpdateDto.prototype, "username", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UserUpdateDto.prototype, "profile_url", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UserUpdateDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: keys_1.COMMON_DEFAULT_DATA.PHONE }),
    (0, class_validator_1.IsOptional)(),
    (0, custom_validations_decorator_1.ValidatePhone)({ message: keys_1.COMMON_ERROR_MESSAGES.INVALID_PHONE }),
    (0, class_validator_1.MaxLength)(10, { message: keys_1.COMMON_ERROR_MESSAGES.PHONE_LENGTH }),
    __metadata("design:type", String)
], UserUpdateDto.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: keys_1.COMMON_DEFAULT_DATA.CODE }),
    (0, class_validator_1.IsOptional)(),
    (0, custom_validations_decorator_1.ValidateCountryCode)({ message: keys_1.COMMON_ERROR_MESSAGES.INVALID_COUNTRY_CODE }),
    __metadata("design:type", String)
], UserUpdateDto.prototype, "phoneCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UserUpdateDto.prototype, "password", void 0);
exports.UserUpdateDto = UserUpdateDto;
//# sourceMappingURL=user-update.dto.js.map