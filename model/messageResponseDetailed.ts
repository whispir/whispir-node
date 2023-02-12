
import { RequestFile } from './models';
import { Link, LinkWrite } from './link';
import { ResponseStatusDetailed, ResponseStatusDetailedWrite } from './responseStatusDetailed';


export type MessageResponseDetailedWrite = {
}

/**
* The detailed message response object.
*/
export class MessageResponseDetailed {
    /**
    * The message response statuses.
    */
    'messageresponses': Set<ResponseStatusDetailed>;
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
            "type": "Set<ResponseStatusDetailed>"
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
        return MessageResponseDetailed.attributeTypeMap;
    }
}

