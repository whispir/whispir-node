import { Link } from './link';
import { User } from './user';
export type UserCollectionWrite = {};
/**
* List users object
*/
export declare class UserCollection {
    /**
    * List of retrieved users
    */
    'users': Array<User>;
    /**
    * Provides the total number of records fetched. This attribute may return \"No records found\" when there are no users available.
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
