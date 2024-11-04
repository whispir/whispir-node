export type DeliveryReceiptWrite = {};
/**
* A fixed object structure used by for Whispir internally for tracking purposes.
*/
export declare class DeliveryReceipt {
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
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
