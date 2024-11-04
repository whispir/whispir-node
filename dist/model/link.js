"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Link = void 0;
/**
* The HATEOAS link object.
*/
class Link {
    static getAttributeTypeMap() {
        return Link.attributeTypeMap;
    }
}
exports.Link = Link;
Link.discriminator = undefined;
Link.attributeTypeMap = [
    {
        "name": "uri",
        "baseName": "uri",
        "type": "string"
    },
    {
        "name": "rel",
        "baseName": "rel",
        "type": "string"
    },
    {
        "name": "method",
        "baseName": "method",
        "type": "string"
    },
    {
        "name": "host",
        "baseName": "host",
        "type": "string"
    },
    {
        "name": "port",
        "baseName": "port",
        "type": "number"
    }
];
