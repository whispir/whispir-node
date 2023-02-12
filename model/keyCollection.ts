
import { RequestFile } from './models';
import { Key, KeyWrite } from './key';


export type KeyCollectionWrite = {
    /**
    * list of keys
    */
    'keys'?: Array<KeyWrite>;
}

/**
* List keys object
*/
export class KeyCollection {
    /**
    * list of keys
    */
    'keys': Array<Key>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "keys",
            "baseName": "keys",
            "type": "Array<Key>"
        }    ];

    static getAttributeTypeMap() {
        return KeyCollection.attributeTypeMap;
    }
}

