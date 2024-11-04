"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CallbackCall = void 0;
/**
* A callback call object
*/
class CallbackCall {
    static getAttributeTypeMap() {
        return CallbackCall.attributeTypeMap;
    }
}
exports.CallbackCall = CallbackCall;
CallbackCall.discriminator = undefined;
CallbackCall.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "messageId",
        "baseName": "messageId",
        "type": "string"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "string"
    },
    {
        "name": "messageLocation",
        "baseName": "messageLocation",
        "type": "string"
    },
    {
        "name": "from",
        "baseName": "from",
        "type": "Responder"
    },
    {
        "name": "responseMessage",
        "baseName": "responseMessage",
        "type": "Response"
    },
    {
        "name": "callback",
        "baseName": "callback",
        "type": "CallbackInvocation"
    },
    {
        "name": "link",
        "baseName": "link",
        "type": "Array<Link>"
    }
];
