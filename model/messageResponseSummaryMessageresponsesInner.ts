
import { RequestFile } from './models';
import { LinkInner } from './linkInner';

/**
* First object if `view` is `summary`, second object if `view` is `detailed`.
*/
export class MessageResponseSummaryMessageresponsesInner {
    /**
    * Details the percentage of responses received for the sent message across all channels.
    */
    'percentageTotal': string;
    /**
    * Details the number of responses received for the sent message across all channels.
    */
    'responseCount': string;
    /**
    * A [HATEOAS](https://en.wikipedia.org/wiki/HATEOAS) link object, describing all discoverable resources in relation to the original request.
    */
    'link': Array<LinkInner>;
    /**
    * The message response category.  * `noresponse` - the message was sent but was not replied to * `notmatched` - the message was replied to and the answer didn\'t match any search criteria
    */
    'type': 'noresponse' | 'notmatched';

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "percentageTotal",
            "baseName": "percentageTotal",
            "type": "string"
        },
        {
            "name": "responseCount",
            "baseName": "responseCount",
            "type": "string"
        },
        {
            "name": "link",
            "baseName": "link",
            "type": "Array<LinkInner>"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return MessageResponseSummaryMessageresponsesInner.attributeTypeMap;
    }
}

