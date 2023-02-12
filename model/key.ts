
import { RequestFile } from './models';


export type KeyWrite = {
    /**
    * Determine if this Key is enabled or disabled
    */
    'enabled': boolean;
    /**
    * User provided description usually used for identifying usage
    */
    'description'?: string;
}

/**
* The key object.
*/
export class Key {
    /**
    * The identifier for this key
    */
    'id': string;
    /**
    * The authentication type that this Key is used for
    */
    'type': 'basic' | 'bearer';
    /**
    * The user identifier associated with this Key
    */
    'userId': string;
    /**
    * The company identifier (client). Provided by Auth0 Management API used to revoke client access during deletion.
    */
    'clientId': string;
    /**
    * Nextgen account id associated with this Key
    */
    'accountId': string;
    /**
    * Determine if this Key is enabled or disabled
    */
    'enabled': boolean;
    /**
    * User provided description usually used for identifying usage
    */
    'description': string;
    /**
    * Timestamp on when the Key has been created
    */
    'createdTime': Date;
    /**
    * Last Modified data and time
    */
    'lastModifiedTime': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        },
        {
            "name": "userId",
            "baseName": "userId",
            "type": "string"
        },
        {
            "name": "clientId",
            "baseName": "clientId",
            "type": "string"
        },
        {
            "name": "accountId",
            "baseName": "accountId",
            "type": "string"
        },
        {
            "name": "enabled",
            "baseName": "enabled",
            "type": "boolean"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "createdTime",
            "baseName": "createdTime",
            "type": "Date"
        },
        {
            "name": "lastModifiedTime",
            "baseName": "lastModifiedTime",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return Key.attributeTypeMap;
    }
}

