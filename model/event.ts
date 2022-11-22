
import { RequestFile } from './models';
import { EventEventFormListInner, EventEventFormListInnerWrite } from './eventEventFormListInner';
import { LinkInner, LinkInnerWrite } from './linkInner';


export type EventWrite = {
    /**
    * Specifies the name of the label used for the messages sent under this event. This needs to match with the name of the event templates available
    */
    'eventLabel': string;
    /**
    * Specifies the status of the event. The status can be one of <ul><li>Active</li><li>Resolved<l></ul>Note:The default status is Open.
    */
    'status': 'Open' | 'Active' | 'Resolved';
    /**
    * Event form list
    */
    'eventFormList'?: Array<EventEventFormListInnerWrite>;
}

/**
* The event object.
*/
export class Event {
    /**
    * Id of the event
    */
    'id': string;
    /**
    * Specifies the name of the label used for the messages sent under this event. This needs to match with the name of the event templates available
    */
    'eventLabel': string;
    /**
    * Specifies the status of the event. The status can be one of <ul><li>Active</li><li>Resolved<l></ul>Note:The default status is Open.
    */
    'status': 'Open' | 'Active' | 'Resolved';
    /**
    * Event form list
    */
    'eventFormList': Array<EventEventFormListInner>;
    /**
    * A [HATEOAS](https://en.wikipedia.org/wiki/HATEOAS) link object, describing all discoverable resources in relation to the original request.
    */
    'link': Array<LinkInner>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
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
            "type": "Array<EventEventFormListInner>"
        },
        {
            "name": "link",
            "baseName": "link",
            "type": "Array<LinkInner>"
        }    ];

    static getAttributeTypeMap() {
        return Event.attributeTypeMap;
    }
}

