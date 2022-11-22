
import { RequestFile } from './models';


export type FeaturesAliasOptionWrite = {
    /**
    * The name of the alias configured to modify the message sender.
    */
    'aliasName'?: string;
}

/**
* The object defining options for message sender aliasing.
*/
export class FeaturesAliasOption {
    /**
    * The name of the alias configured to modify the message sender.
    */
    'aliasName': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "aliasName",
            "baseName": "aliasName",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return FeaturesAliasOption.attributeTypeMap;
    }
}

