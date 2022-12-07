
import { RequestFile } from './models';


export type MessageResponseDetailedStatusResponseMessageWrite = {
}

/**
* The message response object.
*/
export class MessageResponseDetailedStatusResponseMessage {
    /**
    * The message response content.
    */
    'content': string;
    /**
    * The message response acknowledgement status.
    */
    'acknowledged': string;
    /**
    * The message response channel.
    */
    'channel': 'N/A' | 'sms' | 'email' | 'voice';

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "content",
            "baseName": "content",
            "type": "string"
        },
        {
            "name": "acknowledged",
            "baseName": "acknowledged",
            "type": "string"
        },
        {
            "name": "channel",
            "baseName": "channel",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return MessageResponseDetailedStatusResponseMessage.attributeTypeMap;
    }
}

