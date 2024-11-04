"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Apns = void 0;
/**
* The apns object holds attributes specific to the contacts\' APNS-registered (Apple Push Notification Service) iOS devices
*/
class Apns {
    static getAttributeTypeMap() {
        return Apns.attributeTypeMap;
    }
}
exports.Apns = Apns;
Apns.discriminator = undefined;
Apns.attributeTypeMap = [
    {
        "name": "sound",
        "baseName": "sound",
        "type": "string"
    },
    {
        "name": "action",
        "baseName": "action",
        "type": "string"
    }
];
