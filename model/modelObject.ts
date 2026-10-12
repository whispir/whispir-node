
import { RequestFile } from './models';


export type ModelObjectWrite = {
    /**
    * Url string of the image
    */
    'link'?: string;
}

/**
* Link to image location
*/
export class ModelObject {
    /**
    * Url string of the image
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
        return ModelObject.attributeTypeMap;
    }
}

