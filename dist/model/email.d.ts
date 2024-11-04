import { Attachments, AttachmentsWrite } from './attachments';
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
    'resources'?: AttachmentsWrite;
};
/**
* The email channel payload, used when sending an email Message.  Not required when a template is provided.
*/
export declare class Email {
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
    'resources': Attachments;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
