"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomApiResponse = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const ApiDecorators = require("@nestjs/swagger");
const common_errors_keys_1 = require("../keys/common_errors.keys");
const httpException_ro_1 = require("../modules/common/httpException.ro");
function CustomApiResponse(params) {
    const { description, type, isCreated = false, isBadRequest = false, isAuthorization = false, } = params;
    const mainDecorator = isCreated ? 'ApiCreatedResponse' : 'ApiOkResponse';
    return (0, common_1.applyDecorators)(ApiDecorators[mainDecorator]({ description, type }), isBadRequest
        ? (0, swagger_1.ApiBadRequestResponse)({
            description: common_errors_keys_1.COMMON_ERRORS.BAD_REQUEST.message,
            type: httpException_ro_1.HttpExceptionBadRequestRO,
        })
        : ApiDecorators.ApiHideProperty(), isAuthorization
        ? (0, swagger_1.ApiUnauthorizedResponse)({
            description: common_errors_keys_1.COMMON_ERRORS.UNAUTHORIZED.message,
            type: httpException_ro_1.HttpExceptionUnauthorizedRO,
        })
        : ApiDecorators.ApiHideProperty());
}
exports.CustomApiResponse = CustomApiResponse;
//# sourceMappingURL=api-response.decorator.js.map