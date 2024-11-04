import { Contact, ContactWrite } from '../model/contact';
import { ContactCollection } from '../model/contactCollection';
import { Interceptor } from '../model/models';
import { ApiResponse, CreateResponse, ApiConfig, RequestOptions } from './apis';
type ContactCreateParams = {
    /**
    * The identifier for the workspace.
    */
    workspaceId: string;
} & ContactWrite;
type ContactDeleteParams = {
    /**
    * The identifier for the workspace.
    */
    workspaceId: string;
    /**
    * The id of the contact to be deleted
    */
    contactId: string;
    /**
    * The API call involves passing an `action=deleteAll` query parameter. Once this action is triggered, all the contact references in all workspaces for a given `contact_id` are deleted asynchronously. There is no way to stop the process once it’s triggered. **Use the action only when you’re definitely sure you want to delete the contact from all workspaces**
    */
    action?: 'deleteAll';
};
type ContactListParams = {
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
    * An object that represents contact fields with values to search on Example: { firstName: "Sam" }
    */
    queryFields?: Partial<Contact>;
    /**
    * Custom Fields
    */
    customFields?: boolean;
};
type ContactRetrieveParams = {
    /**
    * The identifier for the workspace.
    */
    workspaceId: string;
    /**
    * Enter contact id.
    */
    contactId: string;
    /**
    * NOTE: once again, the equal sign must be intended as \"contains\" rather than \"equals\". So if we search the people whose firstName equals Sam we might be given back e.g. Sam, Samantha, Samuel. Similarly for numbers: if we search Contacts with staffId equal to 1234 we will given back e.g. the contact with staffID equal to 1234 but also e.g. a contact with staffID equal to 98123456. If you need to narrow down please consider applying additional filters
    */
    fields?: string;
    /**
    * The order in which you require the results to be returned. Either ‘asc’ or ‘desc’
    */
    sortOrder?: 'asc' | 'desc';
    /**
    * The fields that you require the ordering to be performed on. Multiple fields can be provided, separated by a comma.
    */
    sortFields?: string;
};
type ContactUpdateParams = {
    /**
    * The identifier for the workspace.
    */
    workspaceId: string;
    /**
    * Enter contact id.
    */
    contactId: string;
} & ContactWrite;
export declare class ContactsApi {
    protected defaultHeaders: any;
    protected useQuerystring: boolean;
    protected interceptors: Interceptor[];
    protected host: string;
    constructor(config: ApiConfig);
    addInterceptor(interceptor: Interceptor): void;
    /**
     * Creates a Contact object. The Contact can be used as a recipient when sending multi-channel messages.
     * @summary Create a contact
     * @param workspaceId The identifier for the workspace.
     * @param xApiKey The API key for authentication.
     * @param accept Application specific mime-type.
     * @param contentType Application specific mime-type.
     * @param contact Contact object to be created
     */
    create(params?: ContactCreateParams, options?: RequestOptions): Promise<CreateResponse<Contact>>;
    /**
     * After performing this request, the response does not contain any information other than the headers as it is not necessary.  The user has requested to delete a contact, and when the response of 204 No Content is returned, the contact is successfully deleted.
     * @summary Delete a contact
     * @param workspaceId The identifier for the workspace.
     * @param xApiKey The API key for authentication.
     * @param contactId The id of the contact to be deleted
     * @param action The API call involves passing an &#x60;action&#x3D;deleteAll&#x60; query parameter. Once this action is triggered, all the contact references in all workspaces for a given &#x60;contact_id&#x60; are deleted asynchronously. There is no way to stop the process once it’s triggered. **Use the action only when you’re definitely sure you want to delete the contact from all workspaces**
     */
    delete(params?: ContactDeleteParams, options?: RequestOptions): Promise<ApiResponse>;
    /**
     * **Note:** There is no global search feature available where one can search on all the workspaces present in the system (under allowed user permission). So, When no workspace is provided, the search is performed on the default workspace of the user.  ### Searching for contacts with Custom Fields  As Whispir supports extension of the default Contact Profile through the use of Custom Fields. There may be cases where users want to search for Contacts that contain these specific fields. As such, the Whispir API supports searching for contacts using these custom fields.  Any custom field can be searched by adding the custom_ prepended to the name.  For example, if the field name is **StaffId**, then the URL would search for:  `/contacts?custom_StaffId=12345`
     * @summary List contacts
     * @param workspaceId The identifier for the workspace.
     * @param xApiKey The API key for authentication.
     * @param accept Application specific mime-type.
     * @param limit The number of records to be returned.
     * @param offset The record number to start returning from.
     * @param sortOrder The order in which you require the results to be returned. Either ‘asc’ or ‘desc’
     * @param sortFields The fields that you require the ordering to be performed on. Multiple fields can be provided, separated by a comma.
     * @param fieldname String Specifies the field name of the contact object. The field name could be any thing as long as it is a valid contact attribute.   Example: &#x60;http://api.whispir.com/contacts?firstName&#x3D;Sam&#x60;
     * @param customFields Custom Fields
     */
    list(params?: ContactListParams, options?: RequestOptions): Promise<ApiResponse<ContactCollection>>;
    /**
     * ### Showing Custom Fields  Whispir supports extension of the default Contact Profile through the use of Custom Fields. Custom fields can support other fields that may be required to be stored on your Contacts, such as Staff ID, Internal Billing Codes, or One Up Manager.  These custom fields can be configured on any account through a Change Request to Whispir.  In order to reveal these custom fields on the contact profile, you can use the `customFields=true` flag within your API request.  Example: `/contacts/AB38CB3EFD38AFDB?customFields=true`
     * @summary Retrieve a contact
     * @param workspaceId The identifier for the workspace.
     * @param xApiKey The API key for authentication.
     * @param contactId Enter contact id.
     * @param accept Application specific mime-type.
     * @param fields NOTE: once again, the equal sign must be intended as \&quot;contains\&quot; rather than \&quot;equals\&quot;. So if we search the people whose firstName equals Sam we might be given back e.g. Sam, Samantha, Samuel. Similarly for numbers: if we search Contacts with staffId equal to 1234 we will given back e.g. the contact with staffID equal to 1234 but also e.g. a contact with staffID equal to 98123456. If you need to narrow down please consider applying additional filters
     * @param sortOrder The order in which you require the results to be returned. Either ‘asc’ or ‘desc’
     * @param sortFields The fields that you require the ordering to be performed on. Multiple fields can be provided, separated by a comma.
     */
    retrieve(params?: ContactRetrieveParams, options?: RequestOptions): Promise<ApiResponse<Contact>>;
    /**
     * The application must provide all the fields during the update request, even if they are not being updated.  ## **NOTE:** Any missing fields will be automatically removed from the existing record.  **Note:** You cannot selectively update the contact fields needed as this is a PUT request.  1.  GET `/contact/{id of contact}` 2.  Update the contact field in the object to the required value 3.  PUT `/contact/{id of contact}` the new object  The response to the PUT request upon success is usually a 204 with no content being provided.
     * @summary Update a contact
     * @param workspaceId The identifier for the workspace.
     * @param xApiKey The API key for authentication.
     * @param contactId Enter contact id.
     * @param accept Application specific mime-type.
     * @param contentType Application specific mime-type.
     * @param contact contact object that needs to be update contact
     */
    update(params?: ContactUpdateParams, options?: RequestOptions): Promise<ApiResponse>;
}
export {};
