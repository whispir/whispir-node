"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Event = void 0;
/**
* The event object.
*/
class Event {
    static getAttributeTypeMap() {
        return Event.attributeTypeMap;
    }
}
exports.Event = Event;
Event.discriminator = undefined;
Event.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "eventLabel",
        "baseName": "eventLabel",
        "type": "string"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "string"
    },
    {
        "name": "eventFormList",
        "baseName": "eventFormList",
        "type": "Array<Form>"
    },
    {
        "name": "link",
        "baseName": "link",
        "type": "Array<Link>"
    }
];
