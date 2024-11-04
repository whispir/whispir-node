export type AliasOptionWrite = {
    /**
    * The name of the alias configured to modify the message sender.
    */
    'aliasName'?: string;
};
/**
* The object defining options for message sender aliasing.
*/
export declare class AliasOption {
    /**
    * The name of the alias configured to modify the message sender.
    */
    'aliasName': string;
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
