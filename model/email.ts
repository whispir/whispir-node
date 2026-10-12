
import { RequestFile } from './models';
import { Attachments, AttachmentsWrite } from './attachments';
import { OptOutOption, OptOutOptionWrite } from './optOutOption';


export type EmailWrite = {
    /**
    * The email message body.
    */
    'body': string;
    /**
    * Plain text or html displayed at the bottom of your email message.
    */
    'footer'?: string;
    /**
    * The email Message content type.
    */
    'type'?: 'text/plain' | 'text/html';
    'optOutOption'?: OptOutOptionWrite;
    'resources'?: AttachmentsWrite;
}

/**
* The email channel payload, used when sending an email Message.  Not required when a template is provided.
*/
export class Email {
    /**
    * The email message body.
    */
    'body': string;
    /**
    * Plain text or html displayed at the bottom of your email message.
    */
    'footer': string;
    /**
    * The email Message content type.
    */
    'type': 'text/plain' | 'text/html';
    'optOutOption': OptOutOption;
    'resources': Attachments;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "body",
            "baseName": "body",
            "type": "string"
        },
        {
            "name": "footer",
            "baseName": "footer",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        },
        {
            "name": "optOutOption",
            "baseName": "optOutOption",
            "type": "OptOutOption"
        },
        {
            "name": "resources",
            "baseName": "resources",
            "type": "Attachments"
        }    ];

    static getAttributeTypeMap() {
        return Email.attributeTypeMap;
    }
}

