"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fcm = void 0;
/**
* The fcm object holds attributes specific to the contacts\' Firebase-registered Android devices
*/
class Fcm {
    static getAttributeTypeMap() {
        return Fcm.attributeTypeMap;
    }
}
exports.Fcm = Fcm;
Fcm.discriminator = undefined;
Fcm.attributeTypeMap = [
    {
        "name": "androidChannelId",
        "baseName": "androidChannelId",
        "type": "string"
    },
    {
        "name": "sound",
        "baseName": "sound",
        "type": "string"
    },
    {
        "name": "action",
        "baseName": "action",
        "type": "string"
    },
    {
        "name": "image",
        "baseName": "image",
        "type": "string"
    }
];
