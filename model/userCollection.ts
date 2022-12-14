
import { RequestFile } from './models';
import { Link, LinkWrite } from './link';


export type UserCollectionWrite = {
}

/**
* List users response object
*/
export class UserCollection {
    /**
    * The ID of the user.
    */
    'id': string;
    /**
    * The first name of the user.
    */
    'firstName': string;
    /**
    * The last name of the user.
    */
    'lastName': string;
    /**
    * The company name of the user.
    */
    'companyName': string;
    /**
    * The primary work email address of the user.
    */
    'workEmailAddress1': string;
    /**
    * A [HATEOAS](https://en.wikipedia.org/wiki/HATEOAS) link object, describing all discoverable resources in relation to the original request.
    */
    'link': Array<Link>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "firstName",
            "baseName": "firstName",
            "type": "string"
        },
        {
            "name": "lastName",
            "baseName": "lastName",
            "type": "string"
        },
        {
            "name": "companyName",
            "baseName": "companyName",
            "type": "string"
        },
        {
            "name": "workEmailAddress1",
            "baseName": "workEmailAddress1",
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

