"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceCollection = void 0;
/**
* List of resources object
*/
class ResourceCollection {
    static getAttributeTypeMap() {
        return ResourceCollection.attributeTypeMap;
    }
}
exports.ResourceCollection = ResourceCollection;
ResourceCollection.discriminator = undefined;
ResourceCollection.attributeTypeMap = [
    {
        "name": "status",
        "baseName": "status",
        "type": "string"
    },
    {
        "name": "resources",
        "baseName": "resources",
        "type": "Array<Resource>"
    }
];
