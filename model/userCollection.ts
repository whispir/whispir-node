
import { RequestFile } from './models';
import { Link, LinkWrite } from './link';
import { User, UserWrite } from './user';


export type UserCollectionWrite = {
}

/**
* List users object
*/
export class UserCollection {
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

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "users",
            "baseName": "users",
            "type": "Array<User>"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string"
        },
        {
            "name": "link",
            "baseName": "link",
            "type": "Array<Link>"
        }    ];

    static getAttributeTypeMap() {
        return UserCollection.attributeTypeMap;
    }
}

