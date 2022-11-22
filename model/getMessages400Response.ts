
import { RequestFile } from './models';


export type GetMessages400ResponseWrite = {
    /**
    * The summary of the error encountered.
    */
    'errorSummary': string;
    /**
    * The detailed description of the error encountered.
    */
    'errorText': string;
    /**
    * The additional details describing the error.
    */
    'errorDetail': string;
}

/**
* The bad request response object.
*/
export class GetMessages400Response {
    /**
    * The summary of the error encountered.
    */
    'errorSummary': string;
    /**
    * The detailed description of the error encountered.
    */
    'errorText': string;
    /**
    * The additional details describing the error.
    */
    'errorDetail': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "errorSummary",
            "baseName": "errorSummary",
            "type": "string"
        },
        {
            "name": "errorText",
            "baseName": "errorText",
            "type": "string"
        },
        {
            "name": "errorDetail",
            "baseName": "errorDetail",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return GetMessages400Response.attributeTypeMap;
    }
}

