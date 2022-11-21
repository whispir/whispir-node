
import { RequestFile } from './models';

/**
* Contains the individual items that make up this list  The ‘name’ is the text that is shown to the user The ‘value’ is the internally passed in value
*/
export class CustomListCustomlabellistsInner {
    /**
    * Specifies the text that is show to the user
    */
    'name'?: string;
    /**
    * Specifies the value that is passed internally
    */
    'value'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return CustomListCustomlabellistsInner.attributeTypeMap;
    }
}

