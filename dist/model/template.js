"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Template = void 0;
/**
* The template object.
*/
class Template {
    static getAttributeTypeMap() {
        return Template.attributeTypeMap;
    }
}
exports.Template = Template;
Template.discriminator = undefined;
Template.attributeTypeMap = [
    {
        "name": "messageTemplateName",
        "baseName": "messageTemplateName",
        "type": "string"
    },
    {
        "name": "messageTemplateDescription",
        "baseName": "messageTemplateDescription",
        "type": "string"
    },
    {
        "name": "responseTemplateId",
        "baseName": "responseTemplateId",
        "type": "string"
    },
    {
        "name": "subject",
        "baseName": "subject",
        "type": "string"
    },
    {
        "name": "body",
        "baseName": "body",
        "type": "string"
    },
    {
        "name": "email",
        "baseName": "email",
        "type": "Email"
    },
    {
        "name": "voice",
        "baseName": "voice",
        "type": "Voice"
    },
    {
        "name": "web",
        "baseName": "web",
        "type": "Web"
    },
    {
        "name": "social",
        "baseName": "social",
        "type": "Social"
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "string"
    },
    {
        "name": "features",
        "baseName": "features",
        "type": "Features"
    },
    {
        "name": "dlr",
        "baseName": "dlr",
        "type": "DeliveryReceipt"
    },
    {
        "name": "link",
        "baseName": "link",
        "type": "Array<Link>"
    },
    {
        "name": "tags",
        "baseName": "tags",
        "type": "string"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    }
];
