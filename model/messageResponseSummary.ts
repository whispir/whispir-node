
import { RequestFile } from './models';
import { LinkInner, LinkInnerWrite } from './linkInner';
import { MessageResponseSummaryMessageresponsesInner, MessageResponseSummaryMessageresponsesInnerWrite } from './messageResponseSummaryMessageresponsesInner';


export type MessageResponseSummaryWrite = {
}

/**
* The summary message response object.
*/
export class MessageResponseSummary {
    /**
    * The message response statuses.
    */
    'messageresponses': Set<MessageResponseSummaryMessageresponsesInner>;
    /**
    * A [HATEOAS](https://en.wikipedia.org/wiki/HATEOAS) link object, describing all discoverable resources in relation to the original request.
    */
    'link': Array<LinkInner>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "messageresponses",
            "baseName": "messageresponses",
            "type": "Set<MessageResponseSummaryMessageresponsesInner>"
        },
        {
            "name": "link",
            "baseName": "link",
            "type": "Array<LinkInner>"
        }    ];

    static getAttributeTypeMap() {
        return MessageResponseSummary.attributeTypeMap;
    }
}

