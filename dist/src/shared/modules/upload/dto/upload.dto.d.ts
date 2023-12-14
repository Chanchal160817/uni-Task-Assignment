export declare enum FILE_TYPE {
    IMAGE = "IMAGE",
    AUDIO = "AUDIO"
}
export declare enum RESOURCE_TYPE {
    USER = "USER",
    MOMENT = "AUDIO"
}
export declare class UploadFileDto {
    fileName: string;
    fileType: FILE_TYPE;
    resourceType: RESOURCE_TYPE;
}
