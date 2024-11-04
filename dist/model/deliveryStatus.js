"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeliveryStatus = void 0;
class DeliveryStatus {
    static getAttributeTypeMap() {
        return DeliveryStatus.attributeTypeMap;
    }
}
exports.DeliveryStatus = DeliveryStatus;
DeliveryStatus.discriminator = undefined;
DeliveryStatus.attributeTypeMap = [
    {
        "name": "type",
        "baseName": "type",
        "type": "string"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "string"
    },
    {
        "name": "destination",
        "baseName": "destination",
        "type": "string"
    }
];
