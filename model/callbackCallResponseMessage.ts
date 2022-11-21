
import { RequestFile } from './models';

/**
* The details about this particular message that have been sent to the callback  IMPORTANT: Depending on the flow, you may only see  one of the acknowledged or undeliverable keys with timestamps as their value
*/
export class CallbackCallResponseMessage {
    /**
    * The channel that this message was sent on. Either SMS, email or voice
    */
    'channel'?: 'sms' | 'email' | 'voice' | 'N/A';
    /**
    * The date/time that this message was acknowledged
    */
    'acknowledged'?: string;
    /**
    * The date/time that this message was marked as undeliverable
    */
    'undeliverable'?: string;
    /**
    * The content of the message
    */
    'content'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "channel",
            "baseName": "channel",
            "type": "string"
        },
        {
            "name": "acknowledged",
            "baseName": "acknowledged",
            "type": "string"
        },
        {
            "name": "undeliverable",
            "baseName": "undeliverable",
            "type": "string"
        },
        {
            "name": "content",
            "baseName": "content",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return CallbackCallResponseMessage.attributeTypeMap;
    }
}

