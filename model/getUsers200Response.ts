
import { RequestFile } from './models';
import { LinkInner, LinkInnerWrite } from './linkInner';
import { ListUsers, ListUsersWrite } from './listUsers';


export type GetUsers200ResponseWrite = {
}

/**
* List users object
*/
export class GetUsers200Response {
    /**
    * List of retrieved users
    */
    'users': Array<ListUsers>;
    /**
    * Provides the total number of records fetched. This attribute may return \"No records found\" when there are no users available.
    */
    'status': string;
    /**
    * A [HATEOAS](https://en.wikipedia.org/wiki/HATEOAS) link object, describing all discoverable resources in relation to the original request.
    */
    'link': Array<LinkInner>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "users",
            "baseName": "users",
            "type": "Array<ListUsers>"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string"
        },
        {
            "name": "link",
            "baseName": "link",
            "type": "Array<LinkInner>"
        }    ];

    static getAttributeTypeMap() {
        return GetUsers200Response.attributeTypeMap;
    }
}

