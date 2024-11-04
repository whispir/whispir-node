"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseRuleCollection = void 0;
class ResponseRuleCollection {
    static getAttributeTypeMap() {
        return ResponseRuleCollection.attributeTypeMap;
    }
}
exports.ResponseRuleCollection = ResponseRuleCollection;
ResponseRuleCollection.discriminator = undefined;
ResponseRuleCollection.attributeTypeMap = [
    {
        "name": "status",
        "baseName": "status",
        "type": "string"
    },
    {
        "name": "responseRules",
        "baseName": "responseRules",
        "type": "Array<ResponseRule>"
    }
];
