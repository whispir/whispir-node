"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldMapping = void 0;
/**
* Mapping the data column in your resource file to the contact field value
*/
class FieldMapping {
    static getAttributeTypeMap() {
        return FieldMapping.attributeTypeMap;
    }
}
exports.FieldMapping = FieldMapping;
FieldMapping.discriminator = undefined;
FieldMapping.attributeTypeMap = [
    {
        "name": "firstName",
        "baseName": "firstName",
        "type": "string"
    },
    {
        "name": "lastName",
        "baseName": "lastName",
        "type": "string"
    },
    {
        "name": "workMobilePhone1",
        "baseName": "workMobilePhone1",
        "type": "string"
    },
    {
        "name": "personalMobilePhone1",
        "baseName": "personalMobilePhone1",
        "type": "string"
    },
    {
        "name": "jobTitle",
        "baseName": "jobTitle",
        "type": "string"
    },
    {
        "name": "companyName",
        "baseName": "companyName",
        "type": "string"
    },
    {
        "name": "workEmailAddress1",
        "baseName": "workEmailAddress1",
        "type": "string"
    },
    {
        "name": "workCountry",
        "baseName": "workCountry",
        "type": "string"
    },
    {
        "name": "timezone",
        "baseName": "timezone",
        "type": "string"
    }
];
