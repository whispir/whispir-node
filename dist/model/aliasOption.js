"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AliasOption = void 0;
/**
* The object defining options for message sender aliasing.
*/
class AliasOption {
    static getAttributeTypeMap() {
        return AliasOption.attributeTypeMap;
    }
}
exports.AliasOption = AliasOption;
AliasOption.discriminator = undefined;
AliasOption.attributeTypeMap = [
    {
        "name": "aliasName",
        "baseName": "aliasName",
        "type": "string"
    }
];
