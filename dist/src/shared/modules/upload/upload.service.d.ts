import { UploadFileDto } from './dto/upload.dto';
export declare class UploadService {
    getPreSignedUrl(param: {
        uploadFileDto: UploadFileDto;
    }): Promise<{
        preSignedUrl: string;
        outPutUrl: string;
    }>;
    removeFileFromS3(param: {
        uploadFileDto: UploadFileDto;
    }): Promise<unknown>;
}
