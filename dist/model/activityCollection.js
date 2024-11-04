"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivityCollection = void 0;
/**
* List activities response object
*/
class ActivityCollection {
    static getAttributeTypeMap() {
        return ActivityCollection.attributeTypeMap;
    }
}
exports.ActivityCollection = ActivityCollection;
ActivityCollection.discriminator = undefined;
ActivityCollection.attributeTypeMap = [
    {
        "name": "activities",
        "baseName": "activities",
        "type": "Array<Activity>"
    },
    {
        "name": "link",
        "baseName": "link",
        "type": "Array<Link>"
    }
];
