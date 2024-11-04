import { Template, TemplateWrite } from '../model/template';
import { TemplateCollection } from '../model/templateCollection';
import { Interceptor } from '../model/models';
import { ApiResponse, CreateResponse, ApiConfig, RequestOptions } from './apis';
type TemplateCreateParams = {
    /**
    * The identifier for the workspace.
    */
    workspaceId: string;
} & TemplateWrite;
type TemplateDeleteParams = {
    /**
    * The identifier for the workspace.
    */
    workspaceId: string;
    /**
    * The identifier for the template.
    */
    templateId: string;
};
type TemplateListParams = {
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
};
type TemplateRetrieveParams = {
    /**
    * The identifier for the workspace.
    */
    workspaceId: string;
    /**
    * The identifier for the template.
    */
    templateId: string;
};
type TemplateUpdateParams = {
    /**
    * The identifier for the workspace.
    */
    workspaceId: string;
    /**
    * The identifier for the template.
    */
    templateId: string;
} & TemplateWrite;
export declare class TemplatesApi {
    protected defaultHeaders: any;
    protected useQuerystring: boolean;
    protected interceptors: Interceptor[];
    protected host: string;
    constructor(config: ApiConfig);
    addInterceptor(interceptor: Interceptor): void;
    /**
     * Create a message template, combining multi-channel content for use with the Message resource. The message template can be reused across multiple sent messages.
     * @summary Create a template
     * @param workspaceId The identifier for the workspace.
     * @param xApiKey The API key for authentication.
     * @param contentType Application specific mime-type.
     * @param accept Application specific mime-type.
     * @param template Templates object that needs to be create Templates
     */
    create(params?: TemplateCreateParams, options?: RequestOptions): Promise<CreateResponse<Template>>;
    /**
     * **Note:** When a template is DELETED, all the associated Scenarios, events, and references of template use in other endpoints will fail. So, ensure that the template is not used anywhere before it is deleted. Whispir **will not** do that check before it deletes the template.
     * @summary Delete a template
     * @param workspaceId The identifier for the workspace.
     * @param xApiKey The API key for authentication.
     * @param contentType Application specific mime-type.
     * @param accept Application specific mime-type.
     * @param templateId The identifier for the template.
     */
    delete(params?: TemplateDeleteParams, options?: RequestOptions): Promise<ApiResponse>;
    /**
     * List all message templates for the workspace.  Pagination is available.
     * @summary List templates
     * @param workspaceId The identifier for the workspace.
     * @param xApiKey The API key for authentication.
     * @param accept Application specific mime-type.
     * @param limit The number of records to be returned.
     * @param offset The record number to start returning from.
     * @param sortOrder The order in which you require the results to be returned. Either ‘asc’ or ‘desc’
     * @param sortFields The fields that you require the ordering to be performed on. Multiple fields can be provided, separated by a comma.
     */
    list(params?: TemplateListParams, options?: RequestOptions): Promise<ApiResponse<TemplateCollection>>;
    /**
     * Retrieves a message template
     * @summary Retrieve a template
     * @param workspaceId The identifier for the workspace.
     * @param xApiKey The API key for authentication.
     * @param accept Application specific mime-type.
     * @param templateId The identifier for the template.
     */
    retrieve(params?: TemplateRetrieveParams, options?: RequestOptions): Promise<ApiResponse<Template>>;
    /**
     * **Note:** Currently users cannot update templates with the same name as a template that already exists in Whispir. Users can overcome this by saving the updated template with a new name, then either changing this back in a subsequent save, or retaining the updated name.
     * @summary Update a template
     * @param workspaceId The identifier for the workspace.
     * @param xApiKey The API key for authentication.
     * @param contentType Application specific mime-type.
     * @param accept Application specific mime-type.
     * @param templateId The identifier for the template.
     * @param template Templates object that needs to be update Templates
     */
    update(params?: TemplateUpdateParams, options?: RequestOptions): Promise<ApiResponse>;
}
export {};
