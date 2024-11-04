import { DistributionList, DistributionListWrite } from '../model/distributionList';
import { DistributionListCollection } from '../model/distributionListCollection';
import { Interceptor } from '../model/models';
import { ApiResponse, CreateResponse, ApiConfig, RequestOptions } from './apis';
type DistributionListCreateParams = {
    /**
    * The identifier for the workspace.
    */
    workspaceId: string;
} & DistributionListWrite;
type DistributionListDeleteParams = {
    /**
    * The identifier for the workspace.
    */
    workspaceId: string;
    /**
    * The id of the distributionlists to be deleted
    */
    distributionlistId: string;
};
type DistributionListListParams = {
    /**
    * The identifier for the workspace.
    */
    workspaceId: string;
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
    /**
    * Specifies the name of the Distribution List to be searched for. It is based on the uniqueness of the name of the Distribution List. If the name contains spaces it is suggested - but not required - to escape them
    */
    name?: string;
    /**
    * Specifies the descrition for the Distribution List to be searched for. If the description contains spaces it is suggested - but not required - to escape them
    */
    description?: string;
};
type DistributionListRetrieveParams = {
    /**
    * The identifier for the workspace.
    */
    workspaceId: string;
    /**
    * Enter Distribution id.
    */
    distributionlistId: string;
};
type DistributionListUpdateParams = {
    /**
    * The identifier for the workspace.
    */
    workspaceId: string;
    /**
    * Enter Distribution id.
    */
    distributionlistId: string;
} & DistributionListWrite;
export declare class DistributionListsApi {
    protected defaultHeaders: any;
    protected useQuerystring: boolean;
    protected interceptors: Interceptor[];
    protected host: string;
    constructor(config: ApiConfig);
    addInterceptor(interceptor: Interceptor): void;
    /**
     * Distribution lists can be created within the Default Workspace, or within a Specific Workspace. More information on Workspaces will be provided later in this documentation.  The MRI value is important here. It is the required unique identifier for any communications that are to be sent out to this distribution list.
     * @summary Create a distribution list
     * @param workspaceId The identifier for the workspace.
     * @param xApiKey The API key for authentication.
     * @param contentType Application specific mime-type.
     * @param accept Application specific mime-type.
     * @param distributionList Distribution list object that needs to be create Distribution list
     */
    create(params?: DistributionListCreateParams, options?: RequestOptions): Promise<CreateResponse<DistributionList>>;
    /**
     * You can only delete the distribution list that you have created or a valid userId associated with the specific distribution list.
     * @summary Delete a distribution list
     * @param workspaceId The identifier for the workspace.
     * @param xApiKey The API key for authentication.
     * @param distributionlistId The id of the distributionlists to be deleted
     */
    delete(params?: DistributionListDeleteParams, options?: RequestOptions): Promise<ApiResponse>;
    /**
     * The distribution list is usually retrieved by its id, but one can also search or refer to the distribution list by its name. This feature has to do with the unique name requirement for the distribution list.  Apart from the name, the description field can also be used to search for a distribution list. While name can be directly used to send in messages, the description is solely for the purpose of search. Once search yields the required result, the mri has to be picked from the selected DL and then used to send the messages.  Both these operations can be performed by passing in the relevant search parameters in the URL as query params.
     * @summary List distribution lists
     * @param workspaceId The identifier for the workspace.
     * @param xApiKey The API key for authentication.
     * @param accept Application specific mime-type.
     * @param limit The number of records to be returned.
     * @param offset The record number to start returning from.
     * @param sortOrder The order in which you require the results to be returned. Either ‘asc’ or ‘desc’
     * @param sortFields The fields that you require the ordering to be performed on. Multiple fields can be provided, separated by a comma.
     * @param name Specifies the name of the Distribution List to be searched for. It is based on the uniqueness of the name of the Distribution List. If the name contains spaces it is suggested - but not required - to escape them
     * @param description Specifies the descrition for the Distribution List to be searched for. If the description contains spaces it is suggested - but not required - to escape them
     */
    list(params?: DistributionListListParams, options?: RequestOptions): Promise<ApiResponse<DistributionListCollection>>;
    /**
     * A distribution list allows you to associate the following:  *   **ContactIds** (type:String) is a comma separated list of Contact IDs that you would like added to the list. *   **UserIds** (type:String) specifies the Whispir Users that should also be notified when this list is used. *   **DistListIds** (type:String) specifies the nested lists that are contained within this distribution list.  Any or all three of these can be updated via the PUT method along with the DL properties (name, description, location etc).  The steps usually are:  1. Create a Distribution List (DL) 2. While creating the DL itself, you can put in the ContactIds, UserIds, distListIds (nested) so that the DL is created with those values readily placed in. 3. After the DL is created, if you want to add/update the values, then 4. Do a GET request to retrieve the specific DL.    -  This will return you the DL object 5. Modify the DL properties (name, description, contactIds, UserIds, dlIds, location etc) as needed 6. Do a PUT request to update the DL details    -  Successful update gives you a 204 No Content    -  The contactIds, userIds, distListIds can be passed all together in a single request.  Note: 1.  If an existing contactId is again added, it does neither throws an error, nor create two entries. The contactId is just neglected and only 1 record is maintained. 2.  If the PUT request was successful, the expected response code is a 204 No Content 3.  For Modifying the Location Information refer to Location Tags for Distribution Lists
     * @summary Retrieve a distribution list
     * @param workspaceId The identifier for the workspace.
     * @param xApiKey The API key for authentication.
     * @param accept Application specific mime-type.
     * @param distributionlistId Enter Distribution id.
     */
    retrieve(params?: DistributionListRetrieveParams, options?: RequestOptions): Promise<ApiResponse<DistributionList>>;
    /**
     * Any or all three of these can be updated via the PUT method along with the DL properties (name, description, location etc).  The steps usually are: 1.  Create a Distribution List (DL) 2.  While creating the DL itself, you can put in the ContactIds, UserIds, distListIds (nested) so that the DL is created with those values readily placed in. 3.  After the DL is created, if you want to add/update the values, then 4.  Do a GET request to retrieve the specific DL.     - This will return you the DL object 5.  Modify the DL properties (name, description, contactIds, UserIds, dlIds, location etc) as needed 6.  Do a PUT request to update the DL details     - Successful update gives you a 204 No Content     - The contactIds, userIds, distListIds can be passed all together in a single request.  Note: - If an existing contactId is again added, it does neither throws an error, nor create two entries. The contactId is just neglected and only 1 record is maintained. - If the PUT request was successful, the expected response code is a 204 No Content - For Modifying the Location Information refer to Location Tags for Distribution Lists
     * @summary Update a distribution list
     * @param workspaceId The identifier for the workspace.
     * @param xApiKey The API key for authentication.
     * @param contentType Application specific mime-type.
     * @param accept Application specific mime-type.
     * @param distributionlistId Enter Distribution id.
     * @param distributionList Distribution list object that needs to be update Distribution list
     */
    update(params?: DistributionListUpdateParams, options?: RequestOptions): Promise<ApiResponse>;
}
export {};
