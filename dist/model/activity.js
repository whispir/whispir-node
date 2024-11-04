"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Activity = void 0;
/**
* Activities are all the individual changes, tasks, calls, messages and so on performed in a given company workspace.
*/
class Activity {
    static getAttributeTypeMap() {
        return Activity.attributeTypeMap;
    }
}
exports.Activity = Activity;
Activity.discriminator = undefined;
Activity.attributeTypeMap = [
    {
        "name": "user",
        "baseName": "user",
        "type": "string"
    },
    {
        "name": "time",
        "baseName": "time",
        "type": "string"
    },
    {
        "name": "action",
        "baseName": "action",
        "type": "string"
    },
    {
        "name": "description",
        "baseName": "description",
        "type": "string"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "string"
    },
    {
        "name": "module",
        "baseName": "module",
        "type": "string"
    },
    {
        "name": "workspaceName",
        "baseName": "workspaceName",
        "type": "string"
    },
    {
        "name": "fullname",
        "baseName": "fullname",
        "type": "string"
    },
    {
        "name": "link",
        "baseName": "link",
        "type": "Array<Link>"
    }
];
