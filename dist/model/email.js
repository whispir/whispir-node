"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Email = void 0;
/**
* The email channel payload, used when sending an email Message.  Not required when a template is provided.
*/
class Email {
    static getAttributeTypeMap() {
        return Email.attributeTypeMap;
    }
}
exports.Email = Email;
Email.discriminator = undefined;
Email.attributeTypeMap = [
    {
        "name": "body",
        "baseName": "body",
        "type": "string"
    },
    {
        "name": "footer",
        "baseName": "footer",
        "type": "string"
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "string"
    },
    {
        "name": "resources",
        "baseName": "resources",
        "type": "Attachments"
    }
];
