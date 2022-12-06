
import { RequestFile } from './models';
import { Link, LinkWrite } from './link';
import { MessageStatusSummary, MessageStatusSummaryWrite } from './messageStatusSummary';


export type MessageStatusWrite = {
    /**
    * The object defining the message delivery status.
    */
    'messageStatuses'?: Array<MessageStatusSummaryWrite>;
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
    'messageStatuses': Set<MessageStatusSummary>;
    /**
    * A [HATEOAS](https://en.wikipedia.org/wiki/HATEOAS) link object, describing all discoverable resources in relation to the original request.
    */
    'link': Array<Link>;
    /**
    * Present when `view` is `detailed`.
    */
    'status': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "messageStatuses",
            "baseName": "messageStatuses",
            "type": "Set<MessageStatusSummary>"
        },
        {
            "name": "link",
            "baseName": "link",
            "type": "Array<Link>"
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

