import { Resource, ResourceWrite } from '../model/resource';
import { ResourceCollection } from '../model/resourceCollection';
import { Interceptor } from '../model/models';
import { ApiResponse, CreateResponse, ApiConfig, RequestOptions } from './apis';
type ResourceCreateParams = {
    /**
    * The identifier for the workspace.
    */
    workspaceId: string;
} & ResourceWrite;
type ResourceDeleteParams = {
    /**
    * The identifier for the workspace.
    */
    workspaceId: string;
    /**
    * The id of the resources to be deleted
    */
    resourceId: string;
};
type ResourceListParams = {
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
    * A filter parameter for the visibility of the resource.
    */
    scope?: 'private' | 'public';
    /**
    * A filter parameter for the name of the resource.
    */
    name?: string;
};
type ResourceRetrieveParams = {
    /**
    * The identifier for the workspace.
    */
    workspaceId: string;
    /**
    * The identifier for the resource.
    */
    resourceId: string;
};
type ResourceUpdateParams = {
    /**
    * The identifier for the workspace.
    */
    workspaceId: string;
    /**
    * Enter resources id.
    */
    resourceId: string;
} & ResourceWrite;
export declare class ResourcesApi {
    protected defaultHeaders: any;
    protected useQuerystring: boolean;
    protected interceptors: Interceptor[];
    protected host: string;
    constructor(config: ApiConfig);
    addInterceptor(interceptor: Interceptor): void;
    /**
     * ### High-Level Response Elements  **name:** String   *   Specifies the name of the file being uploaded. The extension of the file too is allowed to be present in the name. **Eg:** australia-contacts.csv *   **Note:** It is advised that names should not contain spaces or special characters other than `-` and `.`. This helps for easier search and also for a valid URL link (especially) in case of public scoped files. *   **Eg:** `australia-contacts.csv` is better name convention than `australia contacts.csv` as the latter converts into `australia%20contacts.csv`.    **scope:** String   Specifies the permission scope of the file being uploaded. The scope defines the access restriction of the resource. It can be only one between:   *   **Public -** Public files have an addressable URL and are available publicly   *   **Private -** Private files have no URL and are only available for bulk messaging purposes and for importing contacts.  **mimeType:** String   The mime type of the file that is being uploaded. The type is dependent on the scope of the resource.   *   **Public -** Public files can be of any mimetype. `text/html`; `text/csv`   *   **Private -** Private files are restricted to `CSV`, `JSON`, and `XML`  **derefUri:** The base64 representation of the file being submitted.  **Note:** When creating a resource, the following conditions apply -  *   Maximum of 10MB per file being uploaded. *   Transactions will have an enforced timeout. *   Resources will be available in the Whispir Platform for a limited timeframe (30 days). These will then be automatically cleaned. This will be a configurable setting for Whispir Administrators.  ### Upload the Resource file via API   To upload a file to Whispir’s API, users will make an API call to the /resources endpoint.   Applications can use this endpoint to store the source files for dynamic messages. This endpoint can also be used to store any file based data (e.g. images, pdf documents, spreadsheets) for an unlimited amount of time.    **Note:** The types of files allowed are - `CSV`, `JSON`, `XML`, Images [`JPEG`, `PNG`], and `WAV`.    Information about the resources endpoint is documented in the Resources section of the documentation.
     * @summary Create a resource
     * @param workspaceId The identifier for the workspace.
     * @param xApiKey The API key for authentication.
     * @param contentType Application specific mime-type.
     * @param accept Application specific mime-type.
     * @param resource resources object that needs to be create resources
     */
    create(params?: ResourceCreateParams, options?: RequestOptions): Promise<CreateResponse<Resource>>;
    /**
     * Resources can be deleted after use. These can be both public and private in scope.    **Note:** Deleting a public resource may result in 404 File Not Found error for any sites or material referencing to it. So, ensure that DELETE is only executed when the reference to all material is removed or the content has to be removed for other purposes immediately.
     * @summary Delete a resource
     * @param workspaceId The identifier for the workspace.
     * @param xApiKey The API key for authentication.
     * @param resourceId The id of the resources to be deleted
     */
    delete(params?: ResourceDeleteParams, options?: RequestOptions): Promise<ApiResponse>;
    /**
     * Existing resources can be easily retrieved via the GET /resources API call. The response lists all of the existing public and private resources available in the system.  **name:** String   - Specifies the name of the resource. The name is given during creation.  **scope:** String   - Specifies the permission scope of the file being uploaded.  **mimeType:** String   - The mime type of the file that is being uploaded.  **url:** String   - The downloaded link to the resource location. Browsing this link results in a download of the resource.   - **Note:** Only available for Public scoped resources.  **link:** Array   - Provides a list of URLs that can be used to manipulate or access the message template.   - uri - the link to access the message template   - rel - the descriptor for what the link will do   - method - the HTTP method to use with this particular link  ## Filtering search results  **Note:** when it comes to searching by name, the equal sign must be intended as `contains` rather than `equals`. So, if we search resources with the value equals to `in` we might be given back   **Eg** (`India.csv` and `Indonesia.json` but also `Argentina.csv`)  ### Filtering By scope  Resources can be filtered by their scope. This can be achieved by sending in the required scope type in the URL as query parameter. The scope can be one of the allowed scope types.  *   Public - &scope=public *   Private - &scope=private  ### Filtering By name  Resources can be filtered by their name. This can be achieved by sending in the name in the URL as query parameter.  **Note:** The name including the file extension makes it a unique search.  **Eg:** - &name=australia.csv
     * @summary List resources
     * @param workspaceId The identifier for the workspace.
     * @param xApiKey The API key for authentication.
     * @param accept Application specific mime-type.
     * @param limit The number of records to be returned.
     * @param offset The record number to start returning from.
     * @param sortOrder The order in which you require the results to be returned. Either ‘asc’ or ‘desc’
     * @param sortFields The fields that you require the ordering to be performed on. Multiple fields can be provided, separated by a comma.
     * @param scope A filter parameter for the visibility of the resource.
     * @param name A filter parameter for the name of the resource.
     */
    list(params?: ResourceListParams, options?: RequestOptions): Promise<ApiResponse<ResourceCollection>>;
    /**
     * A single resource (public|private) can be retrieved from the available resource by using the resource’s specific link uri
     * @summary Retrieve a resource
     * @param workspaceId The identifier for the workspace.
     * @param xApiKey The API key for authentication.
     * @param accept Application specific mime-type.
     * @param resourceId The identifier for the resource.
     */
    retrieve(params?: ResourceRetrieveParams, options?: RequestOptions): Promise<ApiResponse<Resource>>;
    /**
     * Updating a resource involves the same process as in creating a resource. The process of using one of the format (CSV, JSON, XML) for private and any format for public -> converting to base64 encoded data is the same.   The change is doing a PUT to the existing resource URL that needs to be updated. Please be careful that doing an update overwrites the previous resource. There is no versioning available in Whispir for the resources.   Any or all of the 4 values can be changed. i.e, name, scope, mimeType, derefUri, but all 4 are mandatory values to be sent.
     * @summary Update a resource
     * @param workspaceId The identifier for the workspace.
     * @param xApiKey The API key for authentication.
     * @param contentType Application specific mime-type.
     * @param accept Application specific mime-type.
     * @param resourceId Enter resources id.
     * @param resource resources object that needs to be update resources
     */
    update(params?: ResourceUpdateParams, options?: RequestOptions): Promise<ApiResponse<Resource>>;
}
export {};
