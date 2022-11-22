
import { RequestFile } from './models';


export type GetMessages403ResponseWrite = {
    /**
    * The error message.
    */
    'message': string;
}

/**
* The forbidden response object.
*/
export class GetMessages403Response {
    /**
    * The error message.
    */
    'message': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "message",
            "baseName": "message",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return GetMessages403Response.attributeTypeMap;
    }
}

