import { Workspace } from './workspace';
export type WorkspaceCollectionWrite = {};
/**
* List of workspaces
*/
export declare class WorkspaceCollection {
    /**
    * List of workspaces
    */
    'workspaces': Array<Workspace>;
    /**
    * Provides the total number of records fetched. This attribute may return \"No records found\" when there are no callbacks available.
    */
    'status': string;
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
