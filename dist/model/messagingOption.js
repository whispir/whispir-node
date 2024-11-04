"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessagingOption = void 0;
/**
* The object to configure message channel options.
*/
class MessagingOption {
    static getAttributeTypeMap() {
        return MessagingOption.attributeTypeMap;
    }
}
exports.MessagingOption = MessagingOption;
MessagingOption.discriminator = undefined;
MessagingOption.attributeTypeMap = [
    {
        "name": "channel",
        "baseName": "channel",
        "type": "string"
    },
    {
        "name": "enabled",
        "baseName": "enabled",
        "type": "boolean"
    },
    {
        "name": "primary",
        "baseName": "primary",
        "type": "string"
    },
    {
        "name": "secondary",
        "baseName": "secondary",
        "type": "string"
    },
    {
        "name": "tertiary",
        "baseName": "tertiary",
        "type": "string"
    }
];
