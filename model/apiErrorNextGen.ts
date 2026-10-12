
import { RequestFile } from './models';


export type ApiErrorNextGenWrite = {
}

/**
* The generic error object returned by new downstream services
*/
export class ApiErrorNextGen {
    /**
    * The status code
    */
    'status': number;
    /**
    * The detailed description of the error encountered.
    */
    'message': string;
    /**
    * The additional details describing the error.
    */
    'detail': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "status",
            "baseName": "status",
            "type": "number"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string"
        },
        {
            "name": "detail",
            "baseName": "detail",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ApiErrorNextGen.attributeTypeMap;
    }
}

