
import { RequestFile } from './models';
import { LinkInner, LinkInnerWrite } from './linkInner';
import { MessageResponseDetailed, MessageResponseDetailedWrite } from './messageResponseDetailed';
import { MessageResponseSummary, MessageResponseSummaryWrite } from './messageResponseSummary';
import { MessageResponseSummaryMessageresponsesInner, MessageResponseSummaryMessageresponsesInnerWrite } from './messageResponseSummaryMessageresponsesInner';


export type GetMessageResponsesById200ResponseWrite = {
}

/**
* The message response object.
*/
export class GetMessageResponsesById200Response {
    /**
    * The message response statuses.
    */
    'messageresponses': Set<MessageResponseSummaryMessageresponsesInner>;
    /**
    * A [HATEOAS](https://en.wikipedia.org/wiki/HATEOAS) link object, describing all discoverable resources in relation to the original request.
    */
    'link': Array<LinkInner>;
    /**
    * The message response pagination status.
    */
    'status': string;

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
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return GetMessageResponsesById200Response.attributeTypeMap;
    }
}

