
import { RequestFile } from './models';


export type EventEventFormListInnerEventFieldListInnerWrite = {
    /**
    * Specifies the name of the event field
    */
    'name'?: string;
    /**
    * Specifies the value of a given field
    */
    'value'?: string;
}

/**
* A key-value pair of name and its value
*/
export class EventEventFormListInnerEventFieldListInner {
    /**
    * Specifies the name of the event field
    */
    'name': string;
    /**
    * Specifies the value of a given field
    */
    'value': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return EventEventFormListInnerEventFieldListInner.attributeTypeMap;
    }
}

