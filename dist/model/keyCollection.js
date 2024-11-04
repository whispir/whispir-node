"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeyCollection = void 0;
/**
* List keys object
*/
class KeyCollection {
    static getAttributeTypeMap() {
        return KeyCollection.attributeTypeMap;
    }
}
exports.KeyCollection = KeyCollection;
KeyCollection.discriminator = undefined;
KeyCollection.attributeTypeMap = [
    {
        "name": "keys",
        "baseName": "keys",
        "type": "Array<Key>"
    }
];
