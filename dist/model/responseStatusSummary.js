"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseStatusSummary = void 0;
/**
* First object if `view` is `summary`, second object if `view` is `detailed`.
*/
class ResponseStatusSummary {
    static getAttributeTypeMap() {
        return ResponseStatusSummary.attributeTypeMap;
    }
}
exports.ResponseStatusSummary = ResponseStatusSummary;
ResponseStatusSummary.discriminator = undefined;
ResponseStatusSummary.attributeTypeMap = [
    {
        "name": "percentageTotal",
        "baseName": "percentageTotal",
        "type": "string"
    },
    {
        "name": "responseCount",
        "baseName": "responseCount",
        "type": "string"
    },
    {
        "name": "link",
        "baseName": "link",
        "type": "Array<Link>"
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "string"
    }
];
