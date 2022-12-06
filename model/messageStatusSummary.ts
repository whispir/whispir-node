
import { RequestFile } from './models';
import { Link, LinkWrite } from './link';
import { MessageStatusChannel, MessageStatusChannelWrite } from './messageStatusChannel';
import { MessageStatusSummaryCategory, MessageStatusSummaryCategoryWrite } from './messageStatusSummaryCategory';


export type MessageStatusSummaryWrite = {
    /**
    * Present when `view` is `summary`.
    */
    'categories'?: Array<MessageStatusSummaryCategoryWrite>;
    /**
    * Present when `view` is `detailed`.
    */
    'name'?: string;
    /**
    * Present when `view` is `detailed`.
    */
    'info'?: string;
    /**
    * Present when `view` is `detailed`.
    */
    'status'?: Array<MessageStatusChannelWrite>;
}

export class MessageStatusSummary {
    /**
    * A [HATEOAS](https://en.wikipedia.org/wiki/HATEOAS) link object, describing all discoverable resources in relation to the original request.
    */
    'link': Array<Link>;
    /**
    * Present when `view` is `summary`.
    */
    'categories': Set<MessageStatusSummaryCategory>;
    /**
    * Present when `view` is `detailed`.
    */
    'name': string;
    /**
    * Present when `view` is `detailed`.
    */
    'info': string;
    /**
    * Present when `view` is `detailed`.
    */
    'status': Set<MessageStatusChannel>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "link",
            "baseName": "link",
            "type": "Array<Link>"
        },
        {
            "name": "categories",
            "baseName": "categories",
            "type": "Set<MessageStatusSummaryCategory>"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "info",
            "baseName": "info",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "Set<MessageStatusChannel>"
        }    ];

    static getAttributeTypeMap() {
        return MessageStatusSummary.attributeTypeMap;
    }
}

