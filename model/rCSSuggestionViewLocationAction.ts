
import { RequestFile } from './models';


export type RCSSuggestionViewLocationActionWrite = {
    'latitude'?: number;
    'longitude'?: number;
    'label'?: string;
    'query'?: string;
}

/**
* Allows sending a location so the end recipient can open it on their phone.  The viewLocationAction can have a combination  of latitude, longitude and label AND/OR a  query link (which has those values embedded).   If both combinations are provided,  the phone will give higher priority to the  query link.
*/
export class RCSSuggestionViewLocationAction {
    'latitude': number;
    'longitude': number;
    'label': string;
    'query': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "latitude",
            "baseName": "latitude",
            "type": "number"
        },
        {
            "name": "longitude",
            "baseName": "longitude",
            "type": "number"
        },
        {
            "name": "label",
            "baseName": "label",
            "type": "string"
        },
        {
            "name": "query",
            "baseName": "query",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return RCSSuggestionViewLocationAction.attributeTypeMap;
    }
}

