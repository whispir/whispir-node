
import { RequestFile } from './models';


export type Object1Write = {
    /**
    * Url string of the video
    */
    'link'?: string;
}

/**
* Link to video location
*/
export class Object1 {
    /**
    * Url string of the video
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
        return Object1.attributeTypeMap;
    }
}

