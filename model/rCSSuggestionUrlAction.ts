
import { RequestFile } from './models';


export type RCSSuggestionUrlActionWrite = {
    'url': string;
}

/**
* Triggers the opening of the provided url on  the end recipient\'s phone. 
*/
export class RCSSuggestionUrlAction {
    'url': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "url",
            "baseName": "url",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return RCSSuggestionUrlAction.attributeTypeMap;
    }
}

