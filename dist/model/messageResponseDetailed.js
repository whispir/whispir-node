"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageResponseDetailed = void 0;
/**
* The detailed message response object.
*/
class MessageResponseDetailed {
    static getAttributeTypeMap() {
        return MessageResponseDetailed.attributeTypeMap;
    }
}
exports.MessageResponseDetailed = MessageResponseDetailed;
MessageResponseDetailed.discriminator = undefined;
MessageResponseDetailed.attributeTypeMap = [
    {
        "name": "messageresponses",
        "baseName": "messageresponses",
        "type": "Set<ResponseStatusDetailed>"
    },
    {
        "name": "link",
        "baseName": "link",
        "type": "Array<Link>"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "string"
    }
];
