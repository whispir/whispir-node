
import { RequestFile } from './models';

/**
* The authentication model details. You will receive -   For `queryparam` - `?Auth={{KeyValue}}`  For `httpheader` - `X-Whispir-Callback-Key: {{KeyValue}}`  For `basicauth` - `Authorization: Basic {{KeyValue}}`  For `bearertoken` - `Authorization: Bearer {{KeyValue}}`
*/
export class CallbackAuth {
    /**
    * The type of authentication allowed by Whispir at the Destination URL
    */
    'type': 'queryparam' | 'httpheader' | 'basicauth' | 'bearertoken';
    /**
    * The value that will be passed with the authentication key
    */
    'key': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        },
        {
            "name": "key",
            "baseName": "key",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return CallbackAuth.attributeTypeMap;
    }
}

