"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CallbackCollection = void 0;
/**
* List of callbacks
*/
class CallbackCollection {
    static getAttributeTypeMap() {
        return CallbackCollection.attributeTypeMap;
    }
}
exports.CallbackCollection = CallbackCollection;
CallbackCollection.discriminator = undefined;
CallbackCollection.attributeTypeMap = [
    {
        "name": "status",
        "baseName": "status",
        "type": "string"
    },
    {
        "name": "callbacks",
        "baseName": "callbacks",
        "type": "Set<Callback>"
    },
    {
        "name": "link",
        "baseName": "link",
        "type": "Array<Link>"
    }
];
