
import { RequestFile } from './models';
import { ModelObject, ModelObjectWrite } from './modelObject';
import { Object1, Object1Write } from './object1';
import { Object2, Object2Write } from './object2';
import { Object3, Object3Write } from './object3';


export type WAContentHeaderWrite = {
    'image'?: ModelObjectWrite;
    'video'?: Object1Write;
    'document'?: Object2Write;
    'location'?: Object3Write;
}

/**
* The header of your message can include one type of media content e.g. image, video, document and location.
*/
export class WAContentHeader {
    'image': ModelObject;
    'video': Object1;
    'document': Object2;
    'location': Object3;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "image",
            "baseName": "image",
            "type": "ModelObject"
        },
        {
            "name": "video",
            "baseName": "video",
            "type": "Object1"
        },
        {
            "name": "document",
            "baseName": "document",
            "type": "Object2"
        },
        {
            "name": "location",
            "baseName": "location",
            "type": "Object3"
        }    ];

    static getAttributeTypeMap() {
        return WAContentHeader.attributeTypeMap;
    }
}

