export type DeliveryCategoryWrite = {
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
};
export declare class DeliveryCategory {
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
