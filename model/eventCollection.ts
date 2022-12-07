
import { RequestFile } from './models';
import { Event, EventWrite } from './event';


export type EventCollectionWrite = {
}

/**
* List of events
*/
export class EventCollection {
    /**
    * Provides the total number of records fetched. This attribute may return \"No records found\" when there are no events available.
    */
    'status': string;
    /**
    * List of events
    */
    'events': Array<Event>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "status",
            "baseName": "status",
            "type": "string"
        },
        {
            "name": "events",
            "baseName": "events",
            "type": "Array<Event>"
        }    ];

    static getAttributeTypeMap() {
        return EventCollection.attributeTypeMap;
    }
}

