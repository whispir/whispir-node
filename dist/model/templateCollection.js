"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemplateCollection = void 0;
/**
* Returns a list of templates
*/
class TemplateCollection {
    static getAttributeTypeMap() {
        return TemplateCollection.attributeTypeMap;
    }
}
exports.TemplateCollection = TemplateCollection;
TemplateCollection.discriminator = undefined;
TemplateCollection.attributeTypeMap = [
    {
        "name": "status",
        "baseName": "status",
        "type": "string"
    },
    {
        "name": "messagetemplates",
        "baseName": "messagetemplates",
        "type": "Set<Template>"
    },
    {
        "name": "link",
        "baseName": "link",
        "type": "Array<Link>"
    }
];
