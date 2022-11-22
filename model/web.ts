
import { RequestFile } from './models';


export type WebWrite = {
    /**
    * The linked web content body.
    */
    'body'?: string;
    /**
    * The web Message content type.
    */
    'type'?: 'text/plain' | 'text/html';
}

/**
* The web channel payload, used when attaching web content to a Message.  Not required when a template is provided.
*/
export class Web {
    /**
    * The linked web content body.
    */
    'body': string;
    /**
    * The web Message content type.
    */
    'type': 'text/plain' | 'text/html';

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "body",
            "baseName": "body",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return Web.attributeTypeMap;
    }
}

