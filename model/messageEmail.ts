
import { RequestFile } from './models';
import { MessageEmailResources, MessageEmailResourcesWrite } from './messageEmailResources';


export type MessageEmailWrite = {
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
    'resources'?: MessageEmailResourcesWrite;
}

/**
* The email channel payload, used when sending an email Message.  Not required when a template is provided.
*/
export class MessageEmail {
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
    'resources': MessageEmailResources;

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
            "type": "MessageEmailResources"
        }    ];

    static getAttributeTypeMap() {
        return MessageEmail.attributeTypeMap;
    }
}

