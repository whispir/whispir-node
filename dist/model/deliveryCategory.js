"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeliveryCategory = void 0;
class DeliveryCategory {
    static getAttributeTypeMap() {
        return DeliveryCategory.attributeTypeMap;
    }
}
exports.DeliveryCategory = DeliveryCategory;
DeliveryCategory.discriminator = undefined;
DeliveryCategory.attributeTypeMap = [
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "recipientCount",
        "baseName": "recipientCount",
        "type": "number"
    },
    {
        "name": "percentageTotal",
        "baseName": "percentageTotal",
        "type": "string"
    }
];
