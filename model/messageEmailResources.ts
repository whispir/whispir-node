
import { RequestFile } from './models';
import { MessageAttachment, MessageAttachmentWrite } from './messageAttachment';


export type MessageEmailResourcesWrite = {
    /**
    * A list of attachments to attach to the email Message.
    */
    'attachments'?: Array<MessageAttachmentWrite>;
}

/**
* The resources to attach to the email Message.
*/
export class MessageEmailResources {
    /**
    * A list of attachments to attach to the email Message.
    */
    'attachments': Array<MessageAttachment>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "attachments",
            "baseName": "attachments",
            "type": "Array<MessageAttachment>"
        }    ];

    static getAttributeTypeMap() {
        return MessageEmailResources.attributeTypeMap;
    }
}

