import { User, UserWrite } from '../model/user';
import { UserCollection } from '../model/userCollection';
import { Interceptor } from '../model/models';
import { ApiResponse, CreateResponse, ApiConfig, RequestOptions } from './apis';
type UserCreateParams = {} & UserWrite;
type UserDeleteParams = {
    /**
    * Enter User id
    */
    userId: string;
};
type UserListParams = {
    /**
    * A filter on the User attributes. Only Users with matching attributes will be returned.
    */
    fieldname?: string;
    /**
    * The order in which you require the results to be returned. Either ‘asc’ or ‘desc’
    */
    sortOrder?: 'asc' | 'desc';
    /**
    * The fields that you require the ordering to be performed on. Multiple fields can be provided, separated by a comma.
    */
    sortFields?: string;
    /**
    * The number of records to be returned.
    */
    limit?: number;
    /**
    * The record number to start returning from.
    */
    offset?: number;
};
type UserRetrieveParams = {
    /**
    * The identifier for the User.
    */
    userId: string;
};
type UserUpdateParams = {
    /**
    * Enter Users id.
    */
    userId: string;
} & UserWrite;
type UserWorkspaceListParams = {
    /**
    * The identifier for the workspace.
    */
    workspaceId: string;
    /**
    * The order in which you require the results to be returned. Either ‘asc’ or ‘desc’
    */
    sortOrder?: 'asc' | 'desc';
    /**
    * The fields that you require the ordering to be performed on. Multiple fields can be provided, separated by a comma.
    */
    sortFields?: string;
    /**
    * The number of records to be returned.
    */
    limit?: number;
    /**
    * The record number to start returning from.
    */
    offset?: number;
};
type UsersDeleteParams = {};
export declare class UsersApi {
    protected defaultHeaders: any;
    protected useQuerystring: boolean;
    protected interceptors: Interceptor[];
    protected host: string;
    constructor(config: ApiConfig);
    addInterceptor(interceptor: Interceptor): void;
    /**
     * Create a new user. Ensure that the necessary permissions are provided to the API account to create or modify user accounts.  ### Activating a User after the creation  When created new users are in the PENDING (P) state. To Activate the user, the User must be set to INACTIVE first via a PUT request and then finally set to ACTIVE (A) via another PUT. They cannot be directly set to (A) from (P).  An user when created is assigned the PENDING status. So, to set the user to ACTIVE, one has to follow the “user state machine” rules. Here’s how we do it: 1.  POST /users for user account creation. Capture the Location header value which is the unique link to the User record. This is used in Step 2 2.  GET /users/{userId} for the user object 3.  PUT /users/{userId} with STATUS set to \'INACTIVE’ - using the user object retreived in step 2 4.  PUT /users/{userId} with STATUS set to \'ACTIVE’ - using the user object retreived in step 2  **Note:** The status text is case sensitive. Lowercase or mixed case text is invalid. Always use uppercase.  Example: active != ACTIVE; inActive != INACTIVE
     * @summary Create a user
     * @param xApiKey The API key for authentication.
     * @param contentType Application specific mime-type.
     * @param accept User accept.
     * @param user The User object to create.
     */
    create(params?: UserCreateParams, options?: RequestOptions): Promise<CreateResponse<User>>;
    /**
     * After performing this request, the response does not contain any information other than the headers as it is not necessary.  The delete a user if successful shall respond with a 204 No Content.
     * @summary Delete a user
     * @param xApiKey The API key for authentication.
     * @param contentType Application specific mime-type.
     * @param accept User accept.
     * @param userId Enter User id
     */
    delete(params?: UserDeleteParams, options?: RequestOptions): Promise<ApiResponse>;
    /**
     * Retrieve a list of users in the account. The result will only be limited to users with ACTIVE status. User’s with other status will not be listed in the results.  Once the request is placed, the response will be a list of url’s to each of the users that the API user has access to/or has requested for via the search criteria.  **Note:** The sample request here shows users from the company the existing API user is associated with. You cannot retrieve users list from outside of your company and users with status != ACTIVE.  ## Retrieving workspace users To retrieve the list of users, the request is made to via GET to `/workspaces/{workspaceId}/users` endpoint.  By default there will be a limit of 20 users returned in a request.  The user will use the limit and offset query parameters to determine how many users they would like to receive. (default when not provided will be limit=20 & offset=0)  ### Searching for users Users can be searched for in a given company by passing in valid search criteria. The search criteria usually can be any of the following user elements (field names) and will be sent in as part of the URI as query parameters. *   First Name *   Last Name *   Title *   Job Title *   Country *   Timezone *   Organization Name *   Division *   Business Unit *   Department *   Team Name *   Role *   Additional Team Name *   Additional Role *   Work Email Address 1 *   Work Mobile Phone 1 *   Work Phone Area Code 1 *   Work Phone 1 *   Status * (see note below)  **Note:** While searching for users via status, use the short code ‘A’ for ACTIVE, similarly, \'I’ for INACTIVE, rather than the full words ACTIVE, INACTIVE, etc. so, it is &status=A not &status=ACTIVE.
     * @summary List users
     * @param xApiKey The API key for authentication.
     * @param accept User accept.
     * @param fieldname A filter on the User attributes. Only Users with matching attributes will be returned.
     * @param sortOrder The order in which you require the results to be returned. Either ‘asc’ or ‘desc’
     * @param sortFields The fields that you require the ordering to be performed on. Multiple fields can be provided, separated by a comma.
     * @param limit The number of records to be returned.
     * @param offset The record number to start returning from.
     */
    list(params?: UserListParams, options?: RequestOptions): Promise<ApiResponse<UserCollection>>;
    /**
     * Retrieves a User object.
     * @summary Retrieve a user
     * @param xApiKey The API key for authentication.
     * @param accept User accept.
     * @param userId The identifier for the User.
     */
    retrieve(params?: UserRetrieveParams, options?: RequestOptions): Promise<ApiResponse<User>>;
    /**
     * The application must provide all the fields during the update request, even if they are not being updated.  **Any missing fields, except for the password field, will be automatically removed from the existing record.**  **Note:** You cannot selectively update the user fields needed as this is a PUT request.  So the standard process for updating a user record is:  1.  GET `/users/{id of user}` 2.  Update the user field in the object to the required value 3.  PUT `/users/{id of user}` the new object  The response to the PUT request upon success is usually a 204 with no content being provided.
     * @summary Update a user
     * @param xApiKey The API key for authentication.
     * @param contentType Application specific mime-type.
     * @param accept User accept.
     * @param userId Enter Users id.
     * @param user Users object that needs to be update Users
     */
    update(params?: UserUpdateParams, options?: RequestOptions): Promise<ApiResponse>;
    /**
     * Returns a list of your Users.
     * @summary List workspace users
     * @param workspaceId The identifier for the workspace.
     * @param xApiKey The API key for authentication.
     * @param accept User accept.
     * @param sortOrder The order in which you require the results to be returned. Either ‘asc’ or ‘desc’
     * @param sortFields The fields that you require the ordering to be performed on. Multiple fields can be provided, separated by a comma.
     * @param limit The number of records to be returned.
     * @param offset The record number to start returning from.
     */
    listByWorkspace(params?: UserWorkspaceListParams, options?: RequestOptions): Promise<ApiResponse<UserCollection>>;
    /**
     * Delete all users in the company.  **Note**: use this endpoint with caution!
     * @summary Delete all users
     * @param xApiKey The API key for authentication.
     * @param contentType Application specific mime-type.
     * @param accept User accept.
     */
    deleteAll(params?: UsersDeleteParams, options?: RequestOptions): Promise<ApiResponse>;
}
export {};
