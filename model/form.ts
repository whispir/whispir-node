
import { RequestFile } from './models';
import { FormField, FormFieldWrite } from './formField';


export type FormWrite = {
    /**
    * Specifies the name of the event form
    */
    'formName'?: string;
    /**
    * Contains a list of event fields, see create /POST event endpoint to learn more about the available fields
    */
    'eventFieldList'?: Array<FormFieldWrite>;
}

/**
* Constitutes the name of the form and its fields
*/
export class Form {
    /**
    * Specifies the name of the event form
    */
    'formName': string;
    /**
    * Contains a list of event fields, see create /POST event endpoint to learn more about the available fields
    */
    'eventFieldList': Array<FormField>;

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
            "type": "Array<FormField>"
        }    ];

    static getAttributeTypeMap() {
        return Form.attributeTypeMap;
    }
}

