
import { RequestFile } from './models';


export type AttachmentWrite = {
    /**
    * The name of the attachment, including the extension.
    */
    'attachmentName': string;
    /**
    * The Base64 encoded value for the email attachment.
    */
    'derefUri': string;
    /**
    * A description for the attachment.
    */
    'attachmentDesc'?: string;
}

/**
* Attachments can be of any type [e.g. PDF, images and documents], and the maximum size of all attached files combined is 10 MB  Attachments must be provided in the payload of the message. URLs can be referenced in the email but will not be added as message attachments.
*/
export class Attachment {
    /**
    * The name of the attachment, including the extension.
    */
    'attachmentName': string;
    /**
    * The Base64 encoded value for the email attachment.
    */
    'derefUri': string;
    /**
    * A description for the attachment.
    */
    'attachmentDesc': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "attachmentName",
            "baseName": "attachmentName",
            "type": "string"
        },
        {
            "name": "derefUri",
            "baseName": "derefUri",
            "type": "string"
        },
        {
            "name": "attachmentDesc",
            "baseName": "attachmentDesc",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return Attachment.attributeTypeMap;
    }
}

