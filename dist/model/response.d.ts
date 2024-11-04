export type ResponseWrite = {};
/**
* The details about this particular message that have been sent to the callback  IMPORTANT: Depending on the flow, you may only see  one of the acknowledged or undeliverable keys with timestamps as their value
*/
export declare class Response {
    /**
    * The channel that this message was sent on. Either SMS, email or voice
    */
    'channel': 'sms' | 'email' | 'voice' | 'N/A';
    /**
    * The date/time that this message was acknowledged
    */
    'acknowledged': string;
    /**
    * The date/time that this message was marked as undeliverable
    */
    'undeliverable': string;
    /**
    * The content of the message
    */
    'content': string;
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
