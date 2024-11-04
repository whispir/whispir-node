export type ChannelWrite = {
    /**
    * The identifier for the social content channel. Read the following section for information on each channel.  | Channel        | id | | -------------- |--------------- | | Twitter        | `\"social\"` | | Facebook       | `\"social_long\"` |
    */
    'id'?: 'social' | 'social_long';
    /**
    * The social content body.
    */
    'body'?: string;
    /**
    * The social message content type.
    */
    'type'?: 'text/plain' | 'text/html';
};
/**
* The social channel object.
*/
export declare class Channel {
    /**
    * The identifier for the social content channel. Read the following section for information on each channel.  | Channel        | id | | -------------- |--------------- | | Twitter        | `\"social\"` | | Facebook       | `\"social_long\"` |
    */
    'id': 'social' | 'social_long';
    /**
    * The social content body.
    */
    'body': string;
    /**
    * The social message content type.
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
