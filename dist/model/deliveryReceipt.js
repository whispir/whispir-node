"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeliveryReceipt = void 0;
/**
* A fixed object structure used by for Whispir internally for tracking purposes.
*/
class DeliveryReceipt {
    static getAttributeTypeMap() {
        return DeliveryReceipt.attributeTypeMap;
    }
}
exports.DeliveryReceipt = DeliveryReceipt;
DeliveryReceipt.discriminator = undefined;
DeliveryReceipt.attributeTypeMap = [
    {
        "name": "period",
        "baseName": "period",
        "type": "string"
    },
    {
        "name": "rule",
        "baseName": "rule",
        "type": "string"
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "string"
    },
    {
        "name": "publishToWeb",
        "baseName": "publishToWeb",
        "type": "boolean"
    },
    {
        "name": "expiryDay",
        "baseName": "expiryDay",
        "type": "number"
    },
    {
        "name": "expiryHour",
        "baseName": "expiryHour",
        "type": "number"
    },
    {
        "name": "expiryMin",
        "baseName": "expiryMin",
        "type": "number"
    },
    {
        "name": "feedIds",
        "baseName": "feedIds",
        "type": "string"
    },
    {
        "name": "bool",
        "baseName": "bool",
        "type": "boolean"
    }
];
