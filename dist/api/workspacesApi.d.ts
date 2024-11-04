import { Workspace, WorkspaceWrite } from '../model/workspace';
import { WorkspaceCollection } from '../model/workspaceCollection';
import { Interceptor } from '../model/models';
import { ApiResponse, CreateResponse, ApiConfig, RequestOptions } from './apis';
type WorkspaceCreateParams = {} & WorkspaceWrite;
type WorkspaceListParams = {
    /**
    * The number of records to be returned.
    */
    limit?: number;
    /**
    * The record number to start returning from.
    */
    offset?: number;
    /**
    * The order in which you require the results to be returned. Either ‘asc’ or ‘desc’
    */
    sortOrder?: 'asc' | 'desc';
    /**
    * The fields that you require the ordering to be performed on. Multiple fields can be provided, separated by a comma.
    */
    sortFields?: string;
};
type WorkspaceRetrieveParams = {
    /**
    * The identifier for the workspace.
    */
    workspaceId: string;
};
type WorkspaceUpdateParams = {
    /**
    * The identifier for the workspace.
    */
    workspaceId: string;
} & WorkspaceWrite;
export declare class WorkspacesApi {
    protected defaultHeaders: any;
    protected useQuerystring: boolean;
    protected interceptors: Interceptor[];
    protected host: string;
    constructor(config: ApiConfig);
    addInterceptor(interceptor: Interceptor): void;
    /**
     * Note: There is no limit to the amount of workspaces each API user can create.
     * @summary Create a workspace
     * @param xApiKey The API key for authentication.
     * @param contentType Application specific mime-type.
     * @param accept Application specific mime-type.
     * @param workspace Create a workspace
     */
    create(params?: WorkspaceCreateParams, options?: RequestOptions): Promise<CreateResponse<Workspace>>;
    /**
     * Returns a list of your workspaces.
     * @summary List workspaces
     * @param xApiKey The API key for authentication.
     * @param accept Application specific mime-type.
     * @param limit The number of records to be returned.
     * @param offset The record number to start returning from.
     * @param sortOrder The order in which you require the results to be returned. Either ‘asc’ or ‘desc’
     * @param sortFields The fields that you require the ordering to be performed on. Multiple fields can be provided, separated by a comma.
     */
    list(params?: WorkspaceListParams, options?: RequestOptions): Promise<ApiResponse<WorkspaceCollection>>;
    /**
     * Use GET on a Workspace Id to verify it is a valid Workspace ID, and see a list of all the other endpoint URIs in that workspace
     * @summary Retrieve a workspace
     * @param xApiKey The API key for authentication.
     * @param accept Application specific mime-type.
     * @param workspaceId The identifier for the workspace.
     */
    retrieve(params?: WorkspaceRetrieveParams, options?: RequestOptions): Promise<ApiResponse<Workspace>>;
    /**
     * Update a workspace endpoint
     * @summary Update a workspace
     * @param xApiKey The API key for authentication.
     * @param contentType Application specific mime-type.
     * @param accept Application specific mime-type.
     * @param workspaceId The identifier for the workspace.
     * @param workspace Update a workspace
     */
    update(params?: WorkspaceUpdateParams, options?: RequestOptions): Promise<ApiResponse<Workspace>>;
}
export {};
