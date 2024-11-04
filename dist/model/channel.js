"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Channel = void 0;
/**
* The social channel object.
*/
class Channel {
    static getAttributeTypeMap() {
        return Channel.attributeTypeMap;
    }
}
exports.Channel = Channel;
Channel.discriminator = undefined;
Channel.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "body",
        "baseName": "body",
        "type": "string"
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "string"
    }
];
