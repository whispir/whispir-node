"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListLabel = void 0;
/**
* Contains the individual items that make up this list  The ‘name’ is the text that is shown to the user The ‘value’ is the internally passed in value
*/
class ListLabel {
    static getAttributeTypeMap() {
        return ListLabel.attributeTypeMap;
    }
}
exports.ListLabel = ListLabel;
ListLabel.discriminator = undefined;
ListLabel.attributeTypeMap = [
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
