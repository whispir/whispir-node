"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Key = void 0;
/**
* The key object.
*/
class Key {
    static getAttributeTypeMap() {
        return Key.attributeTypeMap;
    }
}
exports.Key = Key;
Key.discriminator = undefined;
Key.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "string"
    },
    {
        "name": "userId",
        "baseName": "userId",
        "type": "string"
    },
    {
        "name": "clientId",
        "baseName": "clientId",
        "type": "string"
    },
    {
        "name": "accountId",
        "baseName": "accountId",
        "type": "string"
    },
    {
        "name": "enabled",
        "baseName": "enabled",
        "type": "boolean"
    },
    {
        "name": "description",
        "baseName": "description",
        "type": "string"
    },
    {
        "name": "createdTime",
        "baseName": "createdTime",
        "type": "Date"
    },
    {
        "name": "lastModifiedTime",
        "baseName": "lastModifiedTime",
        "type": "string"
    }
];
