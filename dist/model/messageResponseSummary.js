"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageResponseSummary = void 0;
/**
* The summary message response object.
*/
class MessageResponseSummary {
    static getAttributeTypeMap() {
        return MessageResponseSummary.attributeTypeMap;
    }
}
exports.MessageResponseSummary = MessageResponseSummary;
MessageResponseSummary.discriminator = undefined;
MessageResponseSummary.attributeTypeMap = [
    {
        "name": "messageresponses",
        "baseName": "messageresponses",
        "type": "Set<ResponseStatusSummary>"
    },
    {
        "name": "link",
        "baseName": "link",
        "type": "Array<Link>"
    }
];
