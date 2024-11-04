"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DistributionList = void 0;
/**
* Static Distribution Lists are manually managed and maintained. They can include Contacts, Users and other Distribution Lists
*/
class DistributionList {
    static getAttributeTypeMap() {
        return DistributionList.attributeTypeMap;
    }
}
exports.DistributionList = DistributionList;
DistributionList.discriminator = undefined;
DistributionList.attributeTypeMap = [
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
        "name": "mri",
        "baseName": "mri",
        "type": "string"
    },
    {
        "name": "description",
        "baseName": "description",
        "type": "string"
    },
    {
        "name": "memberCount",
        "baseName": "memberCount",
        "type": "string"
    },
    {
        "name": "access",
        "baseName": "access",
        "type": "string"
    },
    {
        "name": "visibility",
        "baseName": "visibility",
        "type": "string"
    },
    {
        "name": "contactIds",
        "baseName": "contactIds",
        "type": "string"
    },
    {
        "name": "userIds",
        "baseName": "userIds",
        "type": "string"
    },
    {
        "name": "distListIds",
        "baseName": "distListIds",
        "type": "string"
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "string"
    },
    {
        "name": "distlistdetails",
        "baseName": "distlistdetails",
        "type": "Array<DistributionListContacts>"
    },
    {
        "name": "rules",
        "baseName": "rules",
        "type": "string"
    },
    {
        "name": "link",
        "baseName": "link",
        "type": "Array<Link>"
    }
];
