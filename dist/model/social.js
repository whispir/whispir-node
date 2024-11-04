"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Social = void 0;
/**
* Whispir can publish content to your Twitter and Facebook walls. Other socials can be made available upon request.
*/
class Social {
    static getAttributeTypeMap() {
        return Social.attributeTypeMap;
    }
}
exports.Social = Social;
Social.discriminator = undefined;
Social.attributeTypeMap = [
    {
        "name": "social",
        "baseName": "social",
        "type": "Array<Channel>"
    }
];
