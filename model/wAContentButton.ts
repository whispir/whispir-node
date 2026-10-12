
import { RequestFile } from './models';


export type WAContentButtonWrite = {
    /**
    * The index value of the button this object represents
    */
    'index': string;
    /**
    * The type of dynamic button i.e. \"quick_reply\" or \"url\"
    */
    'subType': 'quick_reply' | 'url';
    /**
    * the url destination when the button is clicked > required when `sub_type` value is `url`
    */
    'text'?: string;
    /**
    * Name of the quick reply buttons configured within your WhatsApp Business Manager account. > required when `sub_type` value is `quick_reply`
    */
    'payload'?: string;
}

/**
* The contents of your dynamic button.  If the button subtype is “url” you will need the following parameters: “Index”, “sub_type”, “text”  If the button subtype is a “quick_reply”, you will need the following parameters: “Index”, “sub_type”, “payload
*/
export class WAContentButton {
    /**
    * The index value of the button this object represents
    */
    'index': string;
    /**
    * The type of dynamic button i.e. \"quick_reply\" or \"url\"
    */
    'subType': 'quick_reply' | 'url';
    /**
    * the url destination when the button is clicked > required when `sub_type` value is `url`
    */
    'text': string;
    /**
    * Name of the quick reply buttons configured within your WhatsApp Business Manager account. > required when `sub_type` value is `quick_reply`
    */
    'payload': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "index",
            "baseName": "index",
            "type": "string"
        },
        {
            "name": "subType",
            "baseName": "sub_type",
            "type": "string"
        },
        {
            "name": "text",
            "baseName": "text",
            "type": "string"
        },
        {
            "name": "payload",
            "baseName": "payload",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return WAContentButton.attributeTypeMap;
    }
}

