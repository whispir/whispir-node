
import { RequestFile } from './models';
import { Attachment } from './attachment';

/**
* The resources to attach to the email Message.
*/
export class EmailResources {
    /**
    * A list of attachments to attach to the email Message.
    */
    'attachments'?: Array<Attachment>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "attachments",
            "baseName": "attachments",
            "type": "Array<Attachment>"
        }    ];

    static getAttributeTypeMap() {
        return EmailResources.attributeTypeMap;
    }
}

