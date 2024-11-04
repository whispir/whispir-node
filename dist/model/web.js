"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Web = void 0;
/**
* The web channel payload, used when attaching web content to a Message.  Not required when a template is provided.
*/
class Web {
    static getAttributeTypeMap() {
        return Web.attributeTypeMap;
    }
}
exports.Web = Web;
Web.discriminator = undefined;
Web.attributeTypeMap = [
    {
        "name": "body",
        "baseName": "body",
        "type": "string"
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "string"
    }
];
