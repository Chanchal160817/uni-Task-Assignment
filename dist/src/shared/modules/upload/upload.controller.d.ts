import { UploadService } from './upload.service';
import { UploadFileDto } from './dto/upload.dto';
export declare class UploadController {
    private uploadService;
    constructor(uploadService: UploadService);
    getPreSignedUrl(uploadFileDto: UploadFileDto): Promise<{
        preSignedUrl: string;
        outPutUrl: string;
    }>;
    deleteFile(uploadFileDto: UploadFileDto): Promise<unknown>;
}
