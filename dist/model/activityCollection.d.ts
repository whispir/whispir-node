import { Activity } from './activity';
import { Link } from './link';
export type ActivityCollectionWrite = {};
/**
* List activities response object
*/
export declare class ActivityCollection {
    /**
    * List of activities
    */
    'activities': Array<Activity>;
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
