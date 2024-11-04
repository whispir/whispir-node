import { Key, KeyWrite } from './key';
export type KeyCollectionWrite = {
    /**
    * list of keys
    */
    'keys'?: Array<KeyWrite>;
};
/**
* List keys object
*/
export declare class KeyCollection {
    /**
    * list of keys
    */
    'keys': Array<Key>;
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
