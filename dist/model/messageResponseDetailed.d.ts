import { Link } from './link';
import { ResponseStatusDetailed } from './responseStatusDetailed';
export type MessageResponseDetailedWrite = {};
/**
* The detailed message response object.
*/
export declare class MessageResponseDetailed {
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
