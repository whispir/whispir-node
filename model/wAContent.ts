
import { RequestFile } from './models';
import { WAContentButton, WAContentButtonWrite } from './wAContentButton';
import { WAContentHeader, WAContentHeaderWrite } from './wAContentHeader';


export type WAContentWrite = {
    'header'?: WAContentHeaderWrite;
    /**
    * The contents of your WhatsApp message
    */
    'body': Array<object>;
    /**
    * The contents of your dynamic button.  If the button subtype is “url” you will need the following parameters: “Index”, “sub_type”, “text”  If the button subtype is a “quick_reply”, you will need the following parameters: “Index”, “sub_type”, “payload\"
    */
    'button'?: Array<WAContentButtonWrite>;
}

/**
* The content of your message which may contain any text and media that will be sent to the recipient. The contents can include a header, a body, and buttons.
*/
export class WAContent {
    'header': WAContentHeader;
    /**
    * The contents of your WhatsApp message
    */
    'body': Array<object>;
    /**
    * The contents of your dynamic button.  If the button subtype is “url” you will need the following parameters: “Index”, “sub_type”, “text”  If the button subtype is a “quick_reply”, you will need the following parameters: “Index”, “sub_type”, “payload\"
    */
    'button': Array<WAContentButton>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "header",
            "baseName": "header",
            "type": "WAContentHeader"
        },
        {
            "name": "body",
            "baseName": "body",
            "type": "Array<object>"
        },
        {
            "name": "button",
            "baseName": "button",
            "type": "Array<WAContentButton>"
        }    ];

    static getAttributeTypeMap() {
        return WAContent.attributeTypeMap;
    }
}

