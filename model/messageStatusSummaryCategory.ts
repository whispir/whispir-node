
import { RequestFile } from './models';


export type MessageStatusSummaryCategoryWrite = {
    /**
    * The delivery status of the message.
    */
    'name'?: 'Sent' | 'Pending' | 'Received' | 'Acknowledged' | 'Undeliverable';
    /**
    * The number of recipients with the given `name` status.
    */
    'recipientCount'?: number;
    /**
    * The percentage of recipients with the given `name` status.
    */
    'percentageTotal'?: string;
}

export class MessageStatusSummaryCategory {
    /**
    * The delivery status of the message.
    */
    'name': 'Sent' | 'Pending' | 'Received' | 'Acknowledged' | 'Undeliverable';
    /**
    * The number of recipients with the given `name` status.
    */
    'recipientCount': number;
    /**
    * The percentage of recipients with the given `name` status.
    */
    'percentageTotal': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "recipientCount",
            "baseName": "recipientCount",
            "type": "number"
        },
        {
            "name": "percentageTotal",
            "baseName": "percentageTotal",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return MessageStatusSummaryCategory.attributeTypeMap;
    }
}

