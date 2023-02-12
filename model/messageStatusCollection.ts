
import { RequestFile } from './models';
import { Link, LinkWrite } from './link';
import { MessageStatus, MessageStatusWrite } from './messageStatus';


export type MessageStatusCollectionWrite = {
    /**
    * The message statuses.
    */
    'messageStatuses'?: Array<MessageStatusWrite>;
    /**
    * Present when `view` is `detailed`.
    */
    'status'?: string;
}

/**
* The message status object, describing the delivery of the sent message.
*/
export class MessageStatusCollection {
    /**
    * The message statuses.
    */
    'messageStatuses': Array<MessageStatus>;
    /**
    * A [HATEOAS](https://en.wikipedia.org/wiki/HATEOAS) link array, describing all discoverable resources in relation to the original request.
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
            "type": "Array<MessageStatus>"
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
        return MessageStatusCollection.attributeTypeMap;
    }
}

