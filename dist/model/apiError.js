"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiError = void 0;
/**
* The generic error object
*/
class ApiError {
    static getAttributeTypeMap() {
        return ApiError.attributeTypeMap;
    }
}
exports.ApiError = ApiError;
ApiError.discriminator = undefined;
ApiError.attributeTypeMap = [
    {
        "name": "errorSummary",
        "baseName": "errorSummary",
        "type": "string"
    },
    {
        "name": "errorText",
        "baseName": "errorText",
        "type": "string"
    },
    {
        "name": "errorDetail",
        "baseName": "errorDetail",
        "type": "string"
    }
];
