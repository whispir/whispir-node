"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Attachment = void 0;
/**
* Attachments can be of any type [e.g. PDF, images and documents], and the maximum size of all attached files combined is 10 MB  Attachments must be provided in the payload of the message. URLs can be referenced in the email but will not be added as message attachments.
*/
class Attachment {
    static getAttributeTypeMap() {
        return Attachment.attributeTypeMap;
    }
}
exports.Attachment = Attachment;
Attachment.discriminator = undefined;
Attachment.attributeTypeMap = [
    {
        "name": "attachmentName",
        "baseName": "attachmentName",
        "type": "string"
    },
    {
        "name": "derefUri",
        "baseName": "derefUri",
        "type": "string"
    },
    {
        "name": "attachmentDesc",
        "baseName": "attachmentDesc",
        "type": "string"
    }
];
