"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Responder = void 0;
/**
* The message responder object.
*/
class Responder {
    static getAttributeTypeMap() {
        return Responder.attributeTypeMap;
    }
}
exports.Responder = Responder;
Responder.discriminator = undefined;
Responder.attributeTypeMap = [
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
        "name": "mobile",
        "baseName": "mobile",
        "type": "string"
    },
    {
        "name": "voice",
        "baseName": "voice",
        "type": "string"
    },
    {
        "name": "email",
        "baseName": "email",
        "type": "string"
    }
];
