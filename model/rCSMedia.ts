
import { RequestFile } from './models';


export type RCSMediaWrite = {
    'fileUrl': string;
    'height'?: 'SHORT' | 'MEDIUM' | 'TALL';
}

/**
* Describes the media to be displayed in the RCS message.
*/
export class RCSMedia {
    'fileUrl': string;
    'height': 'SHORT' | 'MEDIUM' | 'TALL';

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "fileUrl",
            "baseName": "fileUrl",
            "type": "string"
        },
        {
            "name": "height",
            "baseName": "height",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return RCSMedia.attributeTypeMap;
    }
}

