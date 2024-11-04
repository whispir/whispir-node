"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImportOptions = void 0;
class ImportOptions {
    static getAttributeTypeMap() {
        return ImportOptions.attributeTypeMap;
    }
}
exports.ImportOptions = ImportOptions;
ImportOptions.discriminator = undefined;
ImportOptions.attributeTypeMap = [
    {
        "name": "fieldMapping",
        "baseName": "fieldMapping",
        "type": "FieldMapping"
    },
    {
        "name": "importMode",
        "baseName": "importMode",
        "type": "string"
    }
];
