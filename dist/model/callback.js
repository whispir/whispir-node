"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Callback = void 0;
/**
* The callback object, used to configure the callback (also known as webhook).
*/
class Callback {
    static getAttributeTypeMap() {
        return Callback.attributeTypeMap;
    }
}
exports.Callback = Callback;
Callback.discriminator = undefined;
Callback.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "url",
        "baseName": "url",
        "type": "string"
    },
    {
        "name": "auth",
        "baseName": "auth",
        "type": "CallbackAuth"
    },
    {
        "name": "contentType",
        "baseName": "contentType",
        "type": "string"
    },
    {
        "name": "removeHTML",
        "baseName": "removeHTML",
        "type": "string"
    },
    {
        "name": "retriesEnabled",
        "baseName": "retriesEnabled",
        "type": "boolean"
    },
    {
        "name": "email",
        "baseName": "email",
        "type": "string"
    },
    {
        "name": "callbacks",
        "baseName": "callbacks",
        "type": "CallbackOptions"
    },
    {
        "name": "link",
        "baseName": "link",
        "type": "Array<Link>"
    }
];
