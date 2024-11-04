import { Link } from './link';
import { Message } from './message';
export type MessageCollectionWrite = {};
/**
* The list messages response object.
*/
export declare class MessageCollection {
    /**
    * The list of retrieved messages.
    */
    'messages': Set<Message>;
    /**
    * The status of the list request.
    */
    'status': string;
    /**
    * A [HATEOAS](https://en.wikipedia.org/wiki/HATEOAS) link array, describing all discoverable resources in relation to the original request.
    */
    'link': Array<Link>;
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
