
import { RequestFile } from './models';

export class MessageStatusMessageStatusesInnerStatusInner {
    /**
    * The message delivery channel.
    */
    'type': 'sms' | 'email' | 'voice';
    /**
    * The message delivery status code.
    */
    'status': '' | 'PENDING' | 'SENT' | 'DELIVRD' | 'READ' | 'FAILED';
    /**
    * The delivery address of the message recipient.
    */
    'destination': string;
    /**
    * The time the message was sent from Whispir servers.
    */
    'sentTimestamp'?: number;
    /**
    * The time the message was received on the message recipient\'s device.
    */
    'receivedTimestamp'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string"
        },
        {
            "name": "destination",
            "baseName": "destination",
            "type": "string"
        },
        {
            "name": "sentTimestamp",
            "baseName": "sentTimestamp",
            "type": "number"
        },
        {
            "name": "receivedTimestamp",
            "baseName": "receivedTimestamp",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return MessageStatusMessageStatusesInnerStatusInner.attributeTypeMap;
    }
}

