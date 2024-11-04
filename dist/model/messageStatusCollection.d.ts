import { Link } from './link';
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
};
/**
* The message status object, describing the delivery of the sent message.
*/
export declare class MessageStatusCollection {
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
