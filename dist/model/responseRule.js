"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseRule = void 0;
/**
* Response Rules are useful when your Templates require the end-users to select among known responses [for example, Yes/No, Accept/Decline or ranking something from 1 to 5]  Using Response Rules in combination with Templates allows you to automatically categorise any response to these messages into different response groups for reporting purposes
*/
class ResponseRule {
    static getAttributeTypeMap() {
        return ResponseRule.attributeTypeMap;
    }
}
exports.ResponseRule = ResponseRule;
ResponseRule.discriminator = undefined;
ResponseRule.attributeTypeMap = [
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "description",
        "baseName": "description",
        "type": "string"
    },
    {
        "name": "responseTemplatePatterns",
        "baseName": "responseTemplatePatterns",
        "type": "TemplatePattern"
    }
];
