"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Import = void 0;
/**
* Import model object
*/
class Import {
    static getAttributeTypeMap() {
        return Import.attributeTypeMap;
    }
}
exports.Import = Import;
Import.discriminator = undefined;
Import.attributeTypeMap = [
    {
        "name": "resourceId",
        "baseName": "resourceId",
        "type": "string"
    },
    {
        "name": "importType",
        "baseName": "importType",
        "type": "string"
    },
    {
        "name": "importOptions",
        "baseName": "importOptions",
        "type": "ImportOptions"
    }
];
