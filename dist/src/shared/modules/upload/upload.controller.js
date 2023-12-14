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
exports.UploadController = void 0;
const common_1 = require("@nestjs/common");
const upload_service_1 = require("./upload.service");
const swagger_1 = require("@nestjs/swagger");
const upload_dto_1 = require("./dto/upload.dto");
const user_login_jwt_guard_1 = require("../../../modules/client/auth/guards/user-login-jwt.guard");
let UploadController = class UploadController {
    constructor(uploadService) {
        this.uploadService = uploadService;
    }
    async getPreSignedUrl(uploadFileDto) {
        return await this.uploadService.getPreSignedUrl({
            uploadFileDto,
        });
    }
    async deleteFile(uploadFileDto) {
        return this.uploadService.removeFileFromS3({
            uploadFileDto,
        });
    }
};
__decorate([
    (0, common_1.Get)('presinged-url'),
    (0, swagger_1.ApiOperation)({ summary: 'Get presinged url for upload file to s3 bucket' }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [upload_dto_1.UploadFileDto]),
    __metadata("design:returntype", Promise)
], UploadController.prototype, "getPreSignedUrl", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Delete file from s3 bucket' }),
    (0, common_1.Delete)('delete-file'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [upload_dto_1.UploadFileDto]),
    __metadata("design:returntype", Promise)
], UploadController.prototype, "deleteFile", null);
UploadController = __decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(user_login_jwt_guard_1.UserLoginJwtGuard),
    (0, swagger_1.ApiTags)('Upload file to AWS S3'),
    (0, common_1.Controller)('upload'),
    __metadata("design:paramtypes", [upload_service_1.UploadService])
], UploadController);
exports.UploadController = UploadController;
//# sourceMappingURL=upload.controller.js.map