export type DeliveryStatusWrite = {
    /**
    * The message channel
    */
    'type'?: 'sms' | 'email' | 'voice';
    /**
    * The delivery status
    */
    'status'?: string;
    /**
    * The message destination
    */
    'destination'?: string;
};
export declare class DeliveryStatus {
    /**
    * The message channel
    */
    'type': 'sms' | 'email' | 'voice';
    /**
    * The delivery status
    */
    'status': string;
    /**
    * The message destination
    */
    'destination': string;
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
