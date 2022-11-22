
import { RequestFile } from './models';
import { LinkInner, LinkInnerWrite } from './linkInner';
import { MessageStatusMessageStatusesInner, MessageStatusMessageStatusesInnerWrite } from './messageStatusMessageStatusesInner';


export type MessageStatusWrite = {
    /**
    * The object defining the message delivery status.
    */
    'messageStatuses'?: Set<MessageStatusMessageStatusesInner>Write;
    /**
    * Present when `view` is `detailed`.
    */
    'status'?: string;
}

/**
* The message status object, describing the delivery of the sent message.
*/
export class MessageStatus {
    /**
    * The object defining the message delivery status.
    */
    'messageStatuses': Set<MessageStatusMessageStatusesInner>;
    /**
    * A [HATEOAS](https://en.wikipedia.org/wiki/HATEOAS) link object, describing all discoverable resources in relation to the original request.
    */
    'link': Array<LinkInner>;
    /**
    * Present when `view` is `detailed`.
    */
    'status': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "messageStatuses",
            "baseName": "messageStatuses",
            "type": "Set<MessageStatusMessageStatusesInner>"
        },
        {
            "name": "link",
            "baseName": "link",
            "type": "Array<LinkInner>"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return MessageStatus.attributeTypeMap;
    }
}

