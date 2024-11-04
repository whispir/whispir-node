"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Attachments = void 0;
/**
* The resources to attach to the Message.
*/
class Attachments {
    static getAttributeTypeMap() {
        return Attachments.attributeTypeMap;
    }
}
exports.Attachments = Attachments;
Attachments.discriminator = undefined;
Attachments.attributeTypeMap = [
    {
        "name": "attachments",
        "baseName": "attachments",
        "type": "Array<Attachment>"
    }
];
