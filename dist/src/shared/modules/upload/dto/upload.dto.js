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
exports.UploadFileDto = exports.RESOURCE_TYPE = exports.FILE_TYPE = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
var FILE_TYPE;
(function (FILE_TYPE) {
    FILE_TYPE["IMAGE"] = "IMAGE";
    FILE_TYPE["AUDIO"] = "AUDIO";
})(FILE_TYPE = exports.FILE_TYPE || (exports.FILE_TYPE = {}));
var RESOURCE_TYPE;
(function (RESOURCE_TYPE) {
    RESOURCE_TYPE["USER"] = "USER";
    RESOURCE_TYPE["MOMENT"] = "AUDIO";
})(RESOURCE_TYPE = exports.RESOURCE_TYPE || (exports.RESOURCE_TYPE = {}));
class UploadFileDto {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    (0, class_transformer_1.Transform)(({ value }) => value === null || value === void 0 ? void 0 : value.trim()),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UploadFileDto.prototype, "fileName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: FILE_TYPE }),
    (0, class_validator_1.IsEnum)(FILE_TYPE),
    __metadata("design:type", String)
], UploadFileDto.prototype, "fileType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: RESOURCE_TYPE }),
    (0, class_validator_1.ValidateIf)((o) => o.type === RESOURCE_TYPE.USER),
    (0, class_validator_1.IsEnum)(RESOURCE_TYPE),
    __metadata("design:type", String)
], UploadFileDto.prototype, "resourceType", void 0);
exports.UploadFileDto = UploadFileDto;
//# sourceMappingURL=upload.dto.js.map