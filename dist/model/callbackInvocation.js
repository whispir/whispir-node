"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CallbackInvocation = void 0;
/**
* The details about this particular callback attempt
*/
class CallbackInvocation {
    static getAttributeTypeMap() {
        return CallbackInvocation.attributeTypeMap;
    }
}
exports.CallbackInvocation = CallbackInvocation;
CallbackInvocation.discriminator = undefined;
CallbackInvocation.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "url",
        "baseName": "url",
        "type": "string"
    },
    {
        "name": "attemptedDate",
        "baseName": "attemptedDate",
        "type": "string"
    },
    {
        "name": "statusCode",
        "baseName": "statusCode",
        "type": "number"
    },
    {
        "name": "statusMessage",
        "baseName": "statusMessage",
        "type": "string"
    }
];
