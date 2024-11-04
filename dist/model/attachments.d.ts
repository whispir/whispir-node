import { Attachment, AttachmentWrite } from './attachment';
export type AttachmentsWrite = {
    /**
    * A list of attachments to attach to the Message.
    */
    'attachments'?: Array<AttachmentWrite>;
};
/**
* The resources to attach to the Message.
*/
export declare class Attachments {
    /**
    * A list of attachments to attach to the Message.
    */
    'attachments': Array<Attachment>;
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
