"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadService = void 0;
const common_1 = require("@nestjs/common");
const s3_request_presigner_1 = require("@aws-sdk/s3-request-presigner");
const client_s3_1 = require("@aws-sdk/client-s3");
const aws_sdk_1 = require("aws-sdk");
let UploadService = class UploadService {
    async getPreSignedUrl(param) {
        const { uploadFileDto: { fileName, fileType, resourceType }, } = param;
        const client = new client_s3_1.S3Client({
            region: process.env.AWS_REGION,
            credentials: {
                accessKeyId: process.env.AWS_ACCESS_KEY_ID,
                secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
            },
        });
        const bucket = process.env.AWS_BUCKET;
        const filePath = `${fileType.toLowerCase()}/${resourceType.toLowerCase()}/${fileName}`;
        const command = new client_s3_1.PutObjectCommand({
            Bucket: bucket,
            Key: filePath,
            ACL: 'public-read',
        });
        const preSignedUrl = await (0, s3_request_presigner_1.getSignedUrl)(client, command, {
            expiresIn: 3600,
        });
        const outPutUrl = `https://${bucket}.s3.amazonaws.com/${filePath}`;
        return {
            preSignedUrl,
            outPutUrl,
        };
    }
    removeFileFromS3(param) {
        const { uploadFileDto: { fileName, fileType, resourceType }, } = param;
        const s3 = new aws_sdk_1.S3({
            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        });
        const filePath = `${fileType.toLowerCase()}/${resourceType.toLowerCase()}/${fileName}`;
        return new Promise((resolve, reject) => {
            return s3.deleteObject({
                Bucket: process.env.AWS_BUCKET,
                Key: filePath,
            }, (err, result) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(result);
                }
            });
        });
    }
};
UploadService = __decorate([
    (0, common_1.Injectable)()
], UploadService);
exports.UploadService = UploadService;
//# sourceMappingURL=upload.service.js.map