
import { RequestFile } from './models';


export type Object2Write = {
    /**
    * Url string of the document
    */
    'link'?: string;
}

/**
* Link to document location
*/
export class Object2 {
    /**
    * Url string of the document
    */
    'link': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "link",
            "baseName": "link",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return Object2.attributeTypeMap;
    }
}

