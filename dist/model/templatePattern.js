"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemplatePattern = void 0;
/**
* This object contains the responseTemplatePattern array, which contains each of the response rule elements. More details on the configuration of this object can be found below
*/
class TemplatePattern {
    static getAttributeTypeMap() {
        return TemplatePattern.attributeTypeMap;
    }
}
exports.TemplatePattern = TemplatePattern;
TemplatePattern.discriminator = undefined;
TemplatePattern.attributeTypeMap = [
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "pattern",
        "baseName": "pattern",
        "type": "string"
    },
    {
        "name": "textPrompt",
        "baseName": "textPrompt",
        "type": "string"
    },
    {
        "name": "voicePrompt",
        "baseName": "voicePrompt",
        "type": "string"
    },
    {
        "name": "spokenVoicePrompt",
        "baseName": "spokenVoicePrompt",
        "type": "string"
    },
    {
        "name": "colour",
        "baseName": "colour",
        "type": "string"
    }
];
