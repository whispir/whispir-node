export type ResponderWrite = {};
/**
* The message responder object.
*/
export declare class Responder {
    /**
    * The name of the sender of this message
    */
    'name': string;
    /**
    * The unique identifier for this contact within Whispir
    */
    'mri': string;
    /**
    * The mobile phone number associated with this sender
    */
    'mobile': string;
    /**
    * The phone number associated with the voice channel for this sender
    */
    'voice': string;
    /**
    * The email address associated with the email channel for this sender
    */
    'email': string;
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
