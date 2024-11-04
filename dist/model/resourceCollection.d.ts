import { Resource } from './resource';
export type ResourceCollectionWrite = {};
/**
* List of resources object
*/
export declare class ResourceCollection {
    /**
    * Provides the total number of records fetched. This attribute may return \"No records found\" when there are no callbacks available.
    */
    'status': string;
    /**
    * List of resources
    */
    'resources': Array<Resource>;
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
