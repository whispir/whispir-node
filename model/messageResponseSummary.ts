
import { RequestFile } from './models';
import { Link, LinkWrite } from './link';
import { ResponseStatusSummary, ResponseStatusSummaryWrite } from './responseStatusSummary';


export type MessageResponseSummaryWrite = {
}

/**
* The summary message response object.
*/
export class MessageResponseSummary {
    /**
    * The message response statuses.
    */
    'messageresponses': Set<ResponseStatusSummary>;
    /**
    * A [HATEOAS](https://en.wikipedia.org/wiki/HATEOAS) link array, describing all discoverable resources in relation to the original request.
    */
    'link': Array<Link>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "messageresponses",
            "baseName": "messageresponses",
            "type": "Set<ResponseStatusSummary>"
        },
        {
            "name": "link",
            "baseName": "link",
            "type": "Array<Link>"
        }    ];

    static getAttributeTypeMap() {
        return MessageResponseSummary.attributeTypeMap;
    }
}

