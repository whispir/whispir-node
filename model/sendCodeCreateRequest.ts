
import { RequestFile } from './models';


export type SendCodeCreateRequestWrite = {
    /**
    * The ID of the workspace where you will use your one time password.
    */
    'workspaceId': string;
    /**
    * Channel where to send the one time passwords.
    */
    'channel': string;
    /**
    * Indicates the recipient\'s contact information.
    */
    'to': string;
    /**
    * Indicates the span of the code to be generated.
    */
    'codeLength': number;
    /**
    * Indicates the expiry of the code generated in the unit of seconds
    */
    'expiresIn': number;
}

/**
* The object containing the information required to send the one time password.
*/
export class SendCodeCreateRequest {
    /**
    * The ID of the workspace where you will use your one time password.
    */
    'workspaceId': string;
    /**
    * Channel where to send the one time passwords.
    */
    'channel': string;
    /**
    * Indicates the recipient\'s contact information.
    */
    'to': string;
    /**
    * Indicates the span of the code to be generated.
    */
    'codeLength': number;
    /**
    * Indicates the expiry of the code generated in the unit of seconds
    */
    'expiresIn': number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "workspaceId",
            "baseName": "workspaceId",
            "type": "string"
        },
        {
            "name": "channel",
            "baseName": "channel",
            "type": "string"
        },
        {
            "name": "to",
            "baseName": "to",
            "type": "string"
        },
        {
            "name": "codeLength",
            "baseName": "codeLength",
            "type": "number"
        },
        {
            "name": "expiresIn",
            "baseName": "expiresIn",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return SendCodeCreateRequest.attributeTypeMap;
    }
}

