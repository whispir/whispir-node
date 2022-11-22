
import { RequestFile } from './models';
import { EventEventFormListInnerEventFieldListInner, EventEventFormListInnerEventFieldListInnerWrite } from './eventEventFormListInnerEventFieldListInner';


export type EventEventFormListInnerWrite = {
    /**
    * Specifies the name of the event form
    */
    'formName'?: string;
    /**
    * Contains a list of event fields, see create /POST event endpoint to learn more about the available fields
    */
    'eventFieldList'?: Array<EventEventFormListInnerEventFieldListInner>Write;
}

/**
* Constitutes the name of the form and its fields
*/
export class EventEventFormListInner {
    /**
    * Specifies the name of the event form
    */
    'formName': string;
    /**
    * Contains a list of event fields, see create /POST event endpoint to learn more about the available fields
    */
    'eventFieldList': Array<EventEventFormListInnerEventFieldListInner>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "formName",
            "baseName": "formName",
            "type": "string"
        },
        {
            "name": "eventFieldList",
            "baseName": "eventFieldList",
            "type": "Array<EventEventFormListInnerEventFieldListInner>"
        }    ];

    static getAttributeTypeMap() {
        return EventEventFormListInner.attributeTypeMap;
    }
}

