"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomListCollection = void 0;
/**
* List of custom lists
*/
class CustomListCollection {
    static getAttributeTypeMap() {
        return CustomListCollection.attributeTypeMap;
    }
}
exports.CustomListCollection = CustomListCollection;
CustomListCollection.discriminator = undefined;
CustomListCollection.attributeTypeMap = [
    {
        "name": "status",
        "baseName": "status",
        "type": "string"
    },
    {
        "name": "customlabels",
        "baseName": "customlabels",
        "type": "Array<CustomList>"
    }
];
