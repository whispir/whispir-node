
import { RequestFile } from './models';

/**
* The object to specify which events callbacks should be enabled for.
*/
export class CallbackCallbacks {
    /**
    * A boolean flag specifying whether message reply callbacks are enabled.
    */
    'reply': 'enabled' | 'disabled';
    /**
    * A boolean flag specifying whether undeliverable message callbacks are enabled.
    */
    'undeliverable': 'enabled' | 'disabled';

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "reply",
            "baseName": "reply",
            "type": "string"
        },
        {
            "name": "undeliverable",
            "baseName": "undeliverable",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return CallbackCallbacks.attributeTypeMap;
    }
}

