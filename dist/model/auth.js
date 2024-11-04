"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auth = void 0;
/**
* The create auth object.
*/
class Auth {
    static getAttributeTypeMap() {
        return Auth.attributeTypeMap;
    }
}
exports.Auth = Auth;
Auth.discriminator = undefined;
Auth.attributeTypeMap = [
    {
        "name": "token",
        "baseName": "token",
        "type": "string"
    },
    {
        "name": "link",
        "baseName": "link",
        "type": "Array<Link>"
    }
];
