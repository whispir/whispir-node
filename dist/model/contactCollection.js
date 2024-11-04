"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactCollection = void 0;
/**
* List contacts object
*/
class ContactCollection {
    static getAttributeTypeMap() {
        return ContactCollection.attributeTypeMap;
    }
}
exports.ContactCollection = ContactCollection;
ContactCollection.discriminator = undefined;
ContactCollection.attributeTypeMap = [
    {
        "name": "status",
        "baseName": "status",
        "type": "string"
    },
    {
        "name": "contacts",
        "baseName": "contacts",
        "type": "Array<Contact>"
    }
];
