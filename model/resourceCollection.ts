
import { RequestFile } from './models';
import { Resource, ResourceWrite } from './resource';


export type ResourceCollectionWrite = {
}

/**
* List of resources object
*/
export class ResourceCollection {
    /**
    * Provides the total number of records fetched. This attribute may return \"No records found\" when there are no callbacks available.
    */
    'status': string;
    /**
    * List of resources
    */
    'resources': Array<Resource>;

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
        return ResourceCollection.attributeTypeMap;
    }
}

