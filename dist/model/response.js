"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Response = void 0;
/**
* The details about this particular message that have been sent to the callback  IMPORTANT: Depending on the flow, you may only see  one of the acknowledged or undeliverable keys with timestamps as their value
*/
class Response {
    static getAttributeTypeMap() {
        return Response.attributeTypeMap;
    }
}
exports.Response = Response;
Response.discriminator = undefined;
Response.attributeTypeMap = [
    {
        "name": "channel",
        "baseName": "channel",
        "type": "string"
    },
    {
        "name": "acknowledged",
        "baseName": "acknowledged",
        "type": "string"
    },
    {
        "name": "undeliverable",
        "baseName": "undeliverable",
        "type": "string"
    },
    {
        "name": "content",
        "baseName": "content",
        "type": "string"
    }
];
