import { Event } from './event';
export type EventCollectionWrite = {};
/**
* List of events
*/
export declare class EventCollection {
    /**
    * Provides the total number of records fetched. This attribute may return \"No records found\" when there are no events available.
    */
    'status': string;
    /**
    * List of events
    */
    'events': Array<Event>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
