
import { RequestFile } from './models';
import { Resource } from './resource';

/**
* List of resources object
*/
export class GetResources200Response {
    /**
    * Provides the total number of records fetched. This attribute may return \"No records found\" when there are no callbacks available.
    */
    'status'?: string;
    /**
    * List of resources
    */
    'resources'?: Array<Resource>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "status",
            "baseName": "status",
            "type": "string"
        },
        {
            "name": "resources",
            "baseName": "resources",
            "type": "Array<Resource>"
        }    ];

    static getAttributeTypeMap() {
        return GetResources200Response.attributeTypeMap;
    }
}

