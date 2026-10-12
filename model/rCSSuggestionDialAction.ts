
import { RequestFile } from './models';


export type RCSSuggestionDialActionWrite = {
    'phoneNumber': string;
}

/**
* Triggers a “call number” action on the  recipient\'s phone using the provided phone  number.
*/
export class RCSSuggestionDialAction {
    'phoneNumber': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "phoneNumber",
            "baseName": "phoneNumber",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return RCSSuggestionDialAction.attributeTypeMap;
    }
}

