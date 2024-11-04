"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Resource = void 0;
/**
* When you’re creating a resource, the following conditions apply:  - Maximum of 10 MB per file being uploaded - Transactions have an enforced timeout - Resources are available in the Whispir platform for a limited time [90 days]. After this time they are automatically cleaned. This is a configurable setting for Whispir Administrators
*/
class Resource {
    static getAttributeTypeMap() {
        return Resource.attributeTypeMap;
    }
}
exports.Resource = Resource;
Resource.discriminator = undefined;
Resource.attributeTypeMap = [
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
        "name": "scope",
        "baseName": "scope",
        "type": "string"
    },
    {
        "name": "mimeType",
        "baseName": "mimeType",
        "type": "string"
    },
    {
        "name": "derefUri",
        "baseName": "derefUri",
        "type": "string"
    },
    {
        "name": "link",
        "baseName": "link",
        "type": "Array<Link>"
    }
];
