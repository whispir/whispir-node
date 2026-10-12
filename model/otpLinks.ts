
import { RequestFile } from './models';


export type OtpLinksWrite = {
    /**
    * The link to verify the code.
    */
    'verify'?: string;
}

/**
* Links related to the resource, verify link is provided to make it easy for UI integrations.
*/
export class OtpLinks {
    /**
    * The link to verify the code.
    */
    'verify': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "verify",
            "baseName": "verify",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return OtpLinks.attributeTypeMap;
    }
}

