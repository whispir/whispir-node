"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PushOptions = void 0;
/**
* The object defining options for push messages.
*/
class PushOptions {
    static getAttributeTypeMap() {
        return PushOptions.attributeTypeMap;
    }
}
exports.PushOptions = PushOptions;
PushOptions.discriminator = undefined;
PushOptions.attributeTypeMap = [
    {
        "name": "notifications",
        "baseName": "notifications",
        "type": "string"
    },
    {
        "name": "escalationMins",
        "baseName": "escalationMins",
        "type": "string"
    },
    {
        "name": "appId",
        "baseName": "appId",
        "type": "string"
    },
    {
        "name": "priority",
        "baseName": "priority",
        "type": "string"
    },
    {
        "name": "fcm",
        "baseName": "fcm",
        "type": "Fcm"
    },
    {
        "name": "apns",
        "baseName": "apns",
        "type": "Apns"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "object"
    }
];
