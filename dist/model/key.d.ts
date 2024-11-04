export type KeyWrite = {
    /**
    * Determine if this Key is enabled or disabled
    */
    'enabled': boolean;
    /**
    * User provided description usually used for identifying usage
    */
    'description'?: string;
};
/**
* The key object.
*/
export declare class Key {
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
