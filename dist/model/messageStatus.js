"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageStatus = void 0;
class MessageStatus {
    static getAttributeTypeMap() {
        return MessageStatus.attributeTypeMap;
    }
}
exports.MessageStatus = MessageStatus;
MessageStatus.discriminator = undefined;
MessageStatus.attributeTypeMap = [
    {
        "name": "link",
        "baseName": "link",
        "type": "Array<Link>"
    },
    {
        "name": "categories",
        "baseName": "categories",
        "type": "Set<DeliveryCategory>"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "info",
        "baseName": "info",
        "type": "string"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "Set<DeliveryStatus>"
    }
];
