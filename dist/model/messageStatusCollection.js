"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageStatusCollection = void 0;
/**
* The message status object, describing the delivery of the sent message.
*/
class MessageStatusCollection {
    static getAttributeTypeMap() {
        return MessageStatusCollection.attributeTypeMap;
    }
}
exports.MessageStatusCollection = MessageStatusCollection;
MessageStatusCollection.discriminator = undefined;
MessageStatusCollection.attributeTypeMap = [
    {
        "name": "messageStatuses",
        "baseName": "messageStatuses",
        "type": "Array<MessageStatus>"
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
