
import { RequestFile } from './models';
import { OtpLinks, OtpLinksWrite } from './otpLinks';


export type OtpWrite = {
    /**
    * The ID of the OTP transaction that has been created.
    */
    'id': string;
    /**
    * Channel where to send the one time passwords.
    */
    'channel': string;
    /**
    * Indicates the span of the code to be generated.
    */
    'codeLength': number;
    /**
    * Indicates the phone number of the recipient.
    */
    'to': string;
    /**
    * Timestamp when the code will expire in UTC format.
    */
    'expiresAt': string;
    /**
    * Current status of the otp transaction.
    */
    'status': string;
    'links': OtpLinksWrite;
}

/**
* The OTP object returned when generating and verifying whispir verify codes
*/
export class Otp {
    /**
    * The ID of the OTP transaction that has been created.
    */
    'id': string;
    /**
    * Channel where to send the one time passwords.
    */
    'channel': string;
    /**
    * Indicates the span of the code to be generated.
    */
    'codeLength': number;
    /**
    * Indicates the phone number of the recipient.
    */
    'to': string;
    /**
    * Timestamp when the code will expire in UTC format.
    */
    'expiresAt': string;
    /**
    * Current status of the otp transaction.
    */
    'status': string;
    'links': OtpLinks;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "channel",
            "baseName": "channel",
            "type": "string"
        },
        {
            "name": "codeLength",
            "baseName": "codeLength",
            "type": "number"
        },
        {
            "name": "to",
            "baseName": "to",
            "type": "string"
        },
        {
            "name": "expiresAt",
            "baseName": "expiresAt",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string"
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "OtpLinks"
        }    ];

    static getAttributeTypeMap() {
        return Otp.attributeTypeMap;
    }
}

