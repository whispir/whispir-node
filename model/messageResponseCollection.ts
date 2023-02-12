
import { RequestFile } from './models';
import { Link, LinkWrite } from './link';
import { MessageResponseDetailed, MessageResponseDetailedWrite } from './messageResponseDetailed';
import { MessageResponseSummary, MessageResponseSummaryWrite } from './messageResponseSummary';
import { ResponseStatusSummary, ResponseStatusSummaryWrite } from './responseStatusSummary';


export type MessageResponseCollectionWrite = {
}

/**
* The message response object.
*/
export class MessageResponseCollection {
    /**
    * The message response statuses.
    */
    'messageresponses': Set<ResponseStatusSummary>;
    /**
    * A [HATEOAS](https://en.wikipedia.org/wiki/HATEOAS) link array, describing all discoverable resources in relation to the original request.
    */
    'link': Array<Link>;
    /**
    * The message response pagination status.
    */
    'status': string;

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
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return MessageResponseCollection.attributeTypeMap;
    }
}

