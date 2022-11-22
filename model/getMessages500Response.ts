
import { RequestFile } from './models';


export type GetMessages500ResponseWrite = {
    /**
    * The error message.
    */
    'message'?: string;
}

/**
* The internal server response object.
*/
export class GetMessages500Response {
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
        return GetMessages500Response.attributeTypeMap;
    }
}

