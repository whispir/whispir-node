
import { RequestFile } from './models';
import { EventFormField, EventFormFieldWrite } from './eventFormField';


export type EventFormWrite = {
    /**
    * Specifies the name of the event form
    */
    'formName'?: string;
    /**
    * Contains a list of event fields, see create /POST event endpoint to learn more about the available fields
    */
    'eventFieldList'?: Array<EventFormFieldWrite>;
}

/**
* Constitutes the name of the form and its fields
*/
export class EventForm {
    /**
    * Specifies the name of the event form
    */
    'formName': string;
    /**
    * Contains a list of event fields, see create /POST event endpoint to learn more about the available fields
    */
    'eventFieldList': Array<EventFormField>;

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
            "type": "Array<EventFormField>"
        }    ];

    static getAttributeTypeMap() {
        return EventForm.attributeTypeMap;
    }
}

