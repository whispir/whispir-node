
import { RequestFile } from './models';
import { EmailResources, EmailResourcesWrite } from './emailResources';


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
    'resources'?: EmailResourcesWrite;
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
    'resources': EmailResources;

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
            "name": "resources",
            "baseName": "resources",
            "type": "EmailResources"
        }    ];

    static getAttributeTypeMap() {
        return Email.attributeTypeMap;
    }
}

