export type CallbackInvocationWrite = {};
/**
* The details about this particular callback attempt
*/
export declare class CallbackInvocation {
    /**
    * The ID of the callback attempting to be invoked
    */
    'id': string;
    /**
    * The name of the callback server attempting to be invoked
    */
    'name': string;
    /**
    * The URL of the callback server attempting to be invoked
    */
    'url': string;
    /**
    * The date/time that the callback server was attempted to be invoked
    */
    'attemptedDate': string;
    /**
    * The statuscode that was returned from the callback service
    */
    'statusCode': number;
    /**
    * The status message that was returned from the callback service
    */
    'statusMessage': string;
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
