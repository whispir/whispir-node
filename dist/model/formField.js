"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormField = void 0;
/**
* A key-value pair of name and its value
*/
class FormField {
    static getAttributeTypeMap() {
        return FormField.attributeTypeMap;
    }
}
exports.FormField = FormField;
FormField.discriminator = undefined;
FormField.attributeTypeMap = [
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "value",
        "baseName": "value",
        "type": "string"
    }
];
