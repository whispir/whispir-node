"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseStatusDetailed = void 0;
class ResponseStatusDetailed {
    static getAttributeTypeMap() {
        return ResponseStatusDetailed.attributeTypeMap;
    }
}
exports.ResponseStatusDetailed = ResponseStatusDetailed;
ResponseStatusDetailed.discriminator = undefined;
ResponseStatusDetailed.attributeTypeMap = [
    {
        "name": "from",
        "baseName": "from",
        "type": "Responder"
    },
    {
        "name": "responseCategory",
        "baseName": "responseCategory",
        "type": "string"
    },
    {
        "name": "responseMessage",
        "baseName": "responseMessage",
        "type": "Response"
    }
];
