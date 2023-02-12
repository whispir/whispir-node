
import { RequestFile } from './models';


export type DeliveryReceiptWrite = {
}

/**
* A fixed object structure used by for Whispir internally for tracking purposes.
*/
export class DeliveryReceipt {
    /**
    * The period of the message delivery.
    */
    'period': string;
    /**
    * The rule of the message delivery.
    */
    'rule': string;
    /**
    * The type of the message delivery.
    */
    'type': string;
    /**
    * Specifies whether the message was published to the web.
    */
    'publishToWeb': boolean;
    /**
    * Specifies the number of days before the message expires.
    */
    'expiryDay': number;
    /**
    * Specifies the number of hours before the message expires.
    */
    'expiryHour': number;
    /**
    * Specifies the number of minutes before the message expires.
    */
    'expiryMin': number;
    /**
    * The feeds identifier for the message delivery.
    */
    'feedIds': string;
    /**
    * The bool field for the message delivery.
    */
    'bool': boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "period",
            "baseName": "period",
            "type": "string"
        },
        {
            "name": "rule",
            "baseName": "rule",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        },
        {
            "name": "publishToWeb",
            "baseName": "publishToWeb",
            "type": "boolean"
        },
        {
            "name": "expiryDay",
            "baseName": "expiryDay",
            "type": "number"
        },
        {
            "name": "expiryHour",
            "baseName": "expiryHour",
            "type": "number"
        },
        {
            "name": "expiryMin",
            "baseName": "expiryMin",
            "type": "number"
        },
        {
            "name": "feedIds",
            "baseName": "feedIds",
            "type": "string"
        },
        {
            "name": "bool",
            "baseName": "bool",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return DeliveryReceipt.attributeTypeMap;
    }
}

