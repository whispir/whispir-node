"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DistributionListCollection = void 0;
/**
* list of distribution lists
*/
class DistributionListCollection {
    static getAttributeTypeMap() {
        return DistributionListCollection.attributeTypeMap;
    }
}
exports.DistributionListCollection = DistributionListCollection;
DistributionListCollection.discriminator = undefined;
DistributionListCollection.attributeTypeMap = [
    {
        "name": "distributionLists",
        "baseName": "distributionLists",
        "type": "Array<DistributionList>"
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
