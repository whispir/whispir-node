export type ListLabelWrite = {};
/**
* Contains the individual items that make up this list  The ‘name’ is the text that is shown to the user The ‘value’ is the internally passed in value
*/
export declare class ListLabel {
    /**
    * Specifies the text that is show to the user
    */
    'name': string;
    /**
    * Specifies the value that is passed internally
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
