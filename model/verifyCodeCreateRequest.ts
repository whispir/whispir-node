
import { RequestFile } from './models';


export type VerifyCodeCreateRequestWrite = {
    /**
    * Indicates the phone number of the recipient
    */
    'to': string;
    /**
    * The code to match and verify
    */
    'code': string;
}

/**
* The object containing the information required to verify the one time password.
*/
export class VerifyCodeCreateRequest {
    /**
    * Indicates the phone number of the recipient
    */
    'to': string;
    /**
    * The code to match and verify
    */
    'code': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "to",
            "baseName": "to",
            "type": "string"
        },
        {
            "name": "code",
            "baseName": "code",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return VerifyCodeCreateRequest.attributeTypeMap;
    }
}

