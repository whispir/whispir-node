"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Location = void 0;
/**
* The location object.
*/
class Location {
    static getAttributeTypeMap() {
        return Location.attributeTypeMap;
    }
}
exports.Location = Location;
Location.discriminator = undefined;
Location.attributeTypeMap = [
    {
        "name": "latitude",
        "baseName": "latitude",
        "type": "number"
    },
    {
        "name": "longitude",
        "baseName": "longitude",
        "type": "number"
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "string"
    }
];
