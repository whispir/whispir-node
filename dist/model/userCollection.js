"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCollection = void 0;
/**
* List users object
*/
class UserCollection {
    static getAttributeTypeMap() {
        return UserCollection.attributeTypeMap;
    }
}
exports.UserCollection = UserCollection;
UserCollection.discriminator = undefined;
UserCollection.attributeTypeMap = [
    {
        "name": "users",
        "baseName": "users",
        "type": "Array<User>"
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
