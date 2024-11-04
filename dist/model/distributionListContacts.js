"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DistributionListContacts = void 0;
class DistributionListContacts {
    static getAttributeTypeMap() {
        return DistributionListContacts.attributeTypeMap;
    }
}
exports.DistributionListContacts = DistributionListContacts;
DistributionListContacts.discriminator = undefined;
DistributionListContacts.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "string"
    },
    {
        "name": "link",
        "baseName": "link",
        "type": "Array<Link>"
    }
];
