"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CallbackOptions = void 0;
/**
* The object to specify which events callbacks should be enabled for.
*/
class CallbackOptions {
    static getAttributeTypeMap() {
        return CallbackOptions.attributeTypeMap;
    }
}
exports.CallbackOptions = CallbackOptions;
CallbackOptions.discriminator = undefined;
CallbackOptions.attributeTypeMap = [
    {
        "name": "reply",
        "baseName": "reply",
        "type": "string"
    },
    {
        "name": "undeliverable",
        "baseName": "undeliverable",
        "type": "string"
    }
];
