export type WebWrite = {
    /**
    * The linked web content body.
    */
    'body'?: string;
    /**
    * The web Message content type.
    */
    'type'?: 'text/plain' | 'text/html';
};
/**
* The web channel payload, used when attaching web content to a Message.  Not required when a template is provided.
*/
export declare class Web {
    /**
    * The linked web content body.
    */
    'body': string;
    /**
    * The web Message content type.
    */
    'type': 'text/plain' | 'text/html';
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
