
import { RequestFile } from './models';

/**
* The message responder object.
*/
export class MessageResponseDetailedMessageresponsesInnerFrom {
    /**
    * The message responder\'s name.
    */
    'name': string;
    /**
    * The message responder\'s MRI.
    */
    'mri': string;
    /**
    * The message responder\'s mobile number.
    */
    'mobile': string;
    /**
    * The message responder\'s email address.
    */
    'email': string;
    /**
    * The message responder\'s voice number.
    */
    'voice': string;

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
            "name": "email",
            "baseName": "email",
            "type": "string"
        },
        {
            "name": "voice",
            "baseName": "voice",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return MessageResponseDetailedMessageresponsesInnerFrom.attributeTypeMap;
    }
}

