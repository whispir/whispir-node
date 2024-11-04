import { Link } from './link';
export type ResponseStatusSummaryWrite = {};
/**
* First object if `view` is `summary`, second object if `view` is `detailed`.
*/
export declare class ResponseStatusSummary {
    /**
    * Details the percentage of responses received for the sent message across all channels.
    */
    'percentageTotal': string;
    /**
    * Details the number of responses received for the sent message across all channels.
    */
    'responseCount': string;
    /**
    * A [HATEOAS](https://en.wikipedia.org/wiki/HATEOAS) link array, describing all discoverable resources in relation to the original request.
    */
    'link': Array<Link>;
    /**
    * The message response category.  * `noresponse` - the message was sent but was not replied to * `notmatched` - the message was replied to and the answer didn\'t match any search criteria
    */
    'type': 'noresponse' | 'notmatched';
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
