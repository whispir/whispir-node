export type CallbackAuthWrite = {
    /**
    * The type of authentication allowed by Whispir at the Destination URL
    */
    'type': 'queryparam' | 'httpheader' | 'basicauth' | 'bearertoken';
    /**
    * The value that will be passed with the authentication key
    */
    'key': string;
};
/**
* The authentication model details. You will receive -   For `queryparam` - `?Auth={{KeyValue}}`  For `httpheader` - `X-Whispir-Callback-Key: {{KeyValue}}`  For `basicauth` - `Authorization: Basic {{KeyValue}}`  For `bearertoken` - `Authorization: Bearer {{KeyValue}}`
*/
export declare class CallbackAuth {
    /**
    * The type of authentication allowed by Whispir at the Destination URL
    */
    'type': 'queryparam' | 'httpheader' | 'basicauth' | 'bearertoken';
    /**
    * The value that will be passed with the authentication key
    */
    'key': string;
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
