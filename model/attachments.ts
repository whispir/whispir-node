
import { RequestFile } from './models';
import { Attachment, AttachmentWrite } from './attachment';


export type AttachmentsWrite = {
    /**
    * A list of attachments to attach to the Message.
    */
    'attachment'?: Array<AttachmentWrite>;
}

/**
* The resources to attach to the Message.
*/
export class Attachments {
    /**
    * A list of attachments to attach to the Message.
    */
    'attachment': Array<Attachment>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "attachment",
            "baseName": "attachment",
            "type": "Array<Attachment>"
        }    ];

    static getAttributeTypeMap() {
        return Attachments.attributeTypeMap;
    }
}

