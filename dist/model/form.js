"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Form = void 0;
/**
* Constitutes the name of the form and its fields
*/
class Form {
    static getAttributeTypeMap() {
        return Form.attributeTypeMap;
    }
}
exports.Form = Form;
Form.discriminator = undefined;
Form.attributeTypeMap = [
    {
        "name": "formName",
        "baseName": "formName",
        "type": "string"
    },
    {
        "name": "eventFieldList",
        "baseName": "eventFieldList",
        "type": "Array<FormField>"
    }
];
