"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomList = void 0;
/**
* A custom list is a predefined list of options that can be inserted into a message or template. A list might be made up of capital city names, days of the week, incident types, business phone numbers and so on. Custom lists make it easy to add information quickly and consistently to your message content.
*/
class CustomList {
    static getAttributeTypeMap() {
        return CustomList.attributeTypeMap;
    }
}
exports.CustomList = CustomList;
CustomList.discriminator = undefined;
CustomList.attributeTypeMap = [
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
        "name": "createdDate",
        "baseName": "createdDate",
        "type": "string"
    },
    {
        "name": "sortType",
        "baseName": "sortType",
        "type": "string"
    },
    {
        "name": "linked",
        "baseName": "linked",
        "type": "string"
    },
    {
        "name": "customlabellists",
        "baseName": "customlabellists",
        "type": "Array<ListLabel>"
    },
    {
        "name": "link",
        "baseName": "link",
        "type": "Array<Link>"
    }
];
