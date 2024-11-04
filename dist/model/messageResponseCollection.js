"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageResponseCollection = void 0;
/**
* The message response object.
*/
class MessageResponseCollection {
    static getAttributeTypeMap() {
        return MessageResponseCollection.attributeTypeMap;
    }
}
exports.MessageResponseCollection = MessageResponseCollection;
MessageResponseCollection.discriminator = undefined;
MessageResponseCollection.attributeTypeMap = [
    {
        "name": "messageresponses",
        "baseName": "messageresponses",
        "type": "Set<ResponseStatusSummary>"
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
