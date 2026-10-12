
import { RequestFile } from './models';


export type KeyWrite = {
    /**
    * User provided description usually used for identifying usage
    */
    'description'?: string;
    /**
    * The authentication secret
    */
    'secret'?: string;
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
    'type': 'basic';
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
    /**
    * The authentication secret
    */
    'secret': string;

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
        },
        {
            "name": "secret",
            "baseName": "secret",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return Key.attributeTypeMap;
    }
}

