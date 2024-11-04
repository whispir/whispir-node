import { CustomList } from '../model/customList';
import { CustomListCollection } from '../model/customListCollection';
import { Interceptor } from '../model/models';
import { ApiResponse, ApiConfig, RequestOptions } from './apis';
type CustomListListParams = {
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
    * Enter search name Eg.Category
    */
    name?: string;
    /**
    * Enter search type Eg.Message
    */
    type?: 'INCIDENT' | 'MESSAGE' | 'CONTACT' | 'RSS';
};
type CustomListRetrieveParams = {
    /**
    * Enter Id
    */
    customlistId: string;
};
export declare class CustomListsApi {
    protected defaultHeaders: any;
    protected useQuerystring: boolean;
    protected interceptors: Interceptor[];
    protected host: string;
    constructor(config: ApiConfig);
    addInterceptor(interceptor: Interceptor): void;
    /**
     * ### High-Level Response Elements **id:** Number   Specifies the unique id of the List.  **name:** String   Specifies the name of the List.  **type:** String   Specifies the type. The type can be one of: *   INCIDENT *   MESSAGE *   CONTACT *   RSS  **sorttype:** String   Specifies the sorting order. The order can be one of: *   As Displayed *   Ascending *   Descending  **linked:** String   Specifies the linked status. Linked list item values are dependent on other lists. The linked can be one of: *   disabled *   list id to which this is linked with  **link:** Array   Provides a list of URLs that can be used to manipulate or access the list.  *   uri - the link to access the list *   rel - the descriptor for what the link will do *   method - the HTTP method to use with this particular link  ### Search or Filter on Custom Lists  API allows you to be able to query the GET /customlists endpoint using the following filters.  **Search Criteria** - **name:** `/customlists?name=Category`  - **type:** `/customlists?type=Message`  *** **Note:** The API currently results in a 404 Not Found when there are no activities present in the log for a given search criteria. This should not be not confused with a failed response. But rather as No Data Found.
     * @summary List custom lists
     * @param xApiKey The API key for authentication.
     * @param accept Application specific mime-type.
     * @param limit The number of records to be returned.
     * @param offset The record number to start returning from.
     * @param sortOrder The order in which you require the results to be returned. Either ‘asc’ or ‘desc’
     * @param sortFields The fields that you require the ordering to be performed on. Multiple fields can be provided, separated by a comma.
     * @param name Enter search name Eg.Category
     * @param type Enter search type Eg.Message
     */
    list(params?: CustomListListParams, options?: RequestOptions): Promise<ApiResponse<CustomListCollection>>;
    /**
     * ### High-Level Response Elements  **id:** Number   Specifies the unique id of the List.  **name:** String   Specifies the name of the List.  **type:** String   Specifies the type. The type can be one of: *   INCIDENT *   MESSAGE *   CONTACT *   RSS  **createdDate:** String   Specifies the date of the List creation.  **sorttype:** String   Specifies the sorting order. The order can be one of: *   As Displayed *   Ascending *   Descending  **linked:** String   Specifies the linked status. Linked list item values are dependent on other lists. The linked can be one of: *   disabled *   list id to which this is linked with  **customlabellists:** Object   The `name` is the text that is shown to the user, where as the `value` is the internally passed in value.  **link:** Array   Provides a list of URLs that can be used to manipulate or access the list. *   uri - the link to access the list *   rel - the descriptor for what the link will do *   method - the HTTP method to use with this particular link
     * @summary Retrieve a custom list
     * @param xApiKey The API key for authentication.
     * @param accept Application specific mime-type.
     * @param customlistId Enter Id
     */
    retrieve(params?: CustomListRetrieveParams, options?: RequestOptions): Promise<ApiResponse<CustomList>>;
}
export {};
