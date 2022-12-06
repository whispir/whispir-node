
import { RequestFile } from './models';


export type ApiErrorWrite = {
}

/**
* The generic error object
*/
export class ApiError {
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
        return ApiError.attributeTypeMap;
    }
}

