
import { RequestFile } from './models';


export type CallbackCallFromWrite = {
}

/**
* The details about this particular message sender/responder
*/
export class CallbackCallFrom {
    /**
    * The name of the sender of this message
    */
    'name': string;
    /**
    * The unique identifier for this contact within Whispir
    */
    'mri': string;
    /**
    * The mobile phone number associated with this sender
    */
    'mobile': string;
    /**
    * The phone number associated with the voice channel for this sender
    */
    'voice': string;
    /**
    * The email address associated with the email channel for this sender
    */
    'email': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "mri",
            "baseName": "mri",
            "type": "string"
        },
        {
            "name": "mobile",
            "baseName": "mobile",
            "type": "string"
        },
        {
            "name": "voice",
            "baseName": "voice",
            "type": "string"
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return CallbackCallFrom.attributeTypeMap;
    }
}

