
import { RequestFile } from './models';
import { Workspace, WorkspaceWrite } from './workspace';


export type WorkspaceCollectionWrite = {
}

/**
* List of workspaces
*/
export class WorkspaceCollection {
    /**
    * List of workspaces
    */
    'workspaces': Array<Workspace>;
    /**
    * Provides the total number of records fetched. This attribute may return \"No records found\" when there are no callbacks available.
    */
    'status': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "workspaces",
            "baseName": "workspaces",
            "type": "Array<Workspace>"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return WorkspaceCollection.attributeTypeMap;
    }
}

