"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CallbackCallCollection = void 0;
/**
* List of callback calls
*/
class CallbackCallCollection {
    static getAttributeTypeMap() {
        return CallbackCallCollection.attributeTypeMap;
    }
}
exports.CallbackCallCollection = CallbackCallCollection;
CallbackCallCollection.discriminator = undefined;
CallbackCallCollection.attributeTypeMap = [
    {
        "name": "calls",
        "baseName": "calls",
        "type": "Array<CallbackCall>"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "string"
    },
    {
        "name": "link",
        "baseName": "link",
        "type": "Array<Link>"
    }
];
