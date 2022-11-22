
import { RequestFile } from './models';


export type CallbackCallCallbackWrite = {
}

/**
* The details about this particular callback attempt
*/
export class CallbackCallCallback {
    /**
    * The ID of the callback attempting to be invoked
    */
    'id': string;
    /**
    * The name of the callback server attempting to be invoked
    */
    'name': string;
    /**
    * The URL of the callback server attempting to be invoked
    */
    'url': string;
    /**
    * The date/time that the callback server was attempted to be invoked
    */
    'attemptedDate': string;
    /**
    * The statuscode that was returned from the callback service
    */
    'statusCode': number;
    /**
    * The status message that was returned from the callback service
    */
    'statusMessage': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string"
        },
        {
            "name": "attemptedDate",
            "baseName": "attemptedDate",
            "type": "string"
        },
        {
            "name": "statusCode",
            "baseName": "statusCode",
            "type": "number"
        },
        {
            "name": "statusMessage",
            "baseName": "statusMessage",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return CallbackCallCallback.attributeTypeMap;
    }
}

