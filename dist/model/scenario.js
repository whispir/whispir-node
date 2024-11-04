"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Scenario = void 0;
/**
* Scenarios allows you to simplify the message delivery process through automated, one-click communications.
*/
class Scenario {
    static getAttributeTypeMap() {
        return Scenario.attributeTypeMap;
    }
}
exports.Scenario = Scenario;
Scenario.discriminator = undefined;
Scenario.attributeTypeMap = [
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
        "name": "allowedUsers",
        "baseName": "allowedUsers",
        "type": "string"
    },
    {
        "name": "allowedUserIds",
        "baseName": "allowedUserIds",
        "type": "string"
    },
    {
        "name": "message",
        "baseName": "message",
        "type": "Message"
    },
    {
        "name": "to",
        "baseName": "to",
        "type": "string"
    },
    {
        "name": "subject",
        "baseName": "subject",
        "type": "string"
    },
    {
        "name": "label",
        "baseName": "label",
        "type": "string"
    },
    {
        "name": "email",
        "baseName": "email",
        "type": "Email"
    },
    {
        "name": "voice",
        "baseName": "voice",
        "type": "Voice"
    },
    {
        "name": "web",
        "baseName": "web",
        "type": "Web"
    },
    {
        "name": "social",
        "baseName": "social",
        "type": "Social"
    }
];
