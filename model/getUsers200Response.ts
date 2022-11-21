
import { RequestFile } from './models';
import { ListUsers } from './listUsers';

/**
* List users object
*/
export class GetUsers200Response {
    /**
    * List of retrieved users
    */
    'users'?: Array<ListUsers>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "users",
            "baseName": "users",
            "type": "Array<ListUsers>"
        }    ];

    static getAttributeTypeMap() {
        return GetUsers200Response.attributeTypeMap;
    }
}

