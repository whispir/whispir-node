"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventCollection = void 0;
/**
* List of events
*/
class EventCollection {
    static getAttributeTypeMap() {
        return EventCollection.attributeTypeMap;
    }
}
exports.EventCollection = EventCollection;
EventCollection.discriminator = undefined;
EventCollection.attributeTypeMap = [
    {
        "name": "status",
        "baseName": "status",
        "type": "string"
    },
    {
        "name": "events",
        "baseName": "events",
        "type": "Array<Event>"
    }
];
