import { CustomList } from './customList';
export type CustomListCollectionWrite = {};
/**
* List of custom lists
*/
export declare class CustomListCollection {
    /**
    * Provides the total number of records fetched. This attribute may return \"No records found\" when there are no callbacks available.
    */
    'status': string;
    /**
    * A list of custom lists
    */
    'customlabels': Array<CustomList>;
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
