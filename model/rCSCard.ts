
import { RequestFile } from './models';
import { RCSMedia, RCSMediaWrite } from './rCSMedia';
import { RCSSuggestion, RCSSuggestionWrite } from './rCSSuggestion';


export type RCSCardWrite = {
    'title'?: string;
    'description'?: string;
    'media'?: RCSMediaWrite;
    'suggestions'?: Array<RCSSuggestionWrite>;
}

/**
* Describes all the attributes needed to display a single RCS Card.
*/
export class RCSCard {
    'title': string;
    'description': string;
    'media': RCSMedia;
    'suggestions': Array<RCSSuggestion>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "title",
            "baseName": "title",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "media",
            "baseName": "media",
            "type": "RCSMedia"
        },
        {
            "name": "suggestions",
            "baseName": "suggestions",
            "type": "Array<RCSSuggestion>"
        }    ];

    static getAttributeTypeMap() {
        return RCSCard.attributeTypeMap;
    }
}

