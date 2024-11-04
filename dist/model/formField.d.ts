export type FormFieldWrite = {
    /**
    * Specifies the name of the event field
    */
    'name'?: string;
    /**
    * Specifies the value of a given field
    */
    'value'?: string;
};
/**
* A key-value pair of name and its value
*/
export declare class FormField {
    /**
    * Specifies the name of the event field
    */
    'name': string;
    /**
    * Specifies the value of a given field
    */
    'value': string;
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
