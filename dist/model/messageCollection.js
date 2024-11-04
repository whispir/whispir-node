"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageCollection = void 0;
/**
* The list messages response object.
*/
class MessageCollection {
    static getAttributeTypeMap() {
        return MessageCollection.attributeTypeMap;
    }
}
exports.MessageCollection = MessageCollection;
MessageCollection.discriminator = undefined;
MessageCollection.attributeTypeMap = [
    {
        "name": "messages",
        "baseName": "messages",
        "type": "Set<Message>"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "string"
    },
    {
        "name": "link",
        "baseName": "link",
        "type": "Array<Link>"
    }
];
