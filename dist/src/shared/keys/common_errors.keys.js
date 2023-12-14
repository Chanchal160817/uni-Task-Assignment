"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.COMMON_ERRORS = exports.ErrorObject = void 0;
const common_1 = require("@nestjs/common");
class ErrorObject {
}
exports.ErrorObject = ErrorObject;
exports.COMMON_ERRORS = {
    INVALID_CREDENTIAL: {
        message: 'Invalid Credential.',
        statusCode: common_1.HttpStatus.BAD_REQUEST,
    },
    BAD_REQUEST: {
        message: 'Bad request.',
        statusCode: common_1.HttpStatus.BAD_REQUEST,
    },
    UNAUTHORIZED: {
        message: 'Unauthorized.',
        statusCode: common_1.HttpStatus.UNAUTHORIZED,
    },
};
//# sourceMappingURL=common_errors.keys.js.map