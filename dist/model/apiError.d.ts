export type ApiErrorWrite = {};
/**
* The generic error object
*/
export declare class ApiError {
    /**
    * The summary of the error encountered.
    */
    'errorSummary': string;
    /**
    * The detailed description of the error encountered.
    */
    'errorText': string;
    /**
    * The additional details describing the error.
    */
    'errorDetail': string;
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
