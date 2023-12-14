import { HttpStatus } from '@nestjs/common';
export declare class ErrorObject {
    message: string;
    statusCode: HttpStatus;
    possibleFixes: Array<string>;
}
export declare const COMMON_ERRORS: {
    INVALID_CREDENTIAL: {
        message: string;
        statusCode: HttpStatus;
    };
    BAD_REQUEST: {
        message: string;
        statusCode: HttpStatus;
    };
    UNAUTHORIZED: {
        message: string;
        statusCode: HttpStatus;
    };
};
