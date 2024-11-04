import { ResponseRule, ResponseRuleWrite } from '../model/responseRule';
import { ResponseRuleCollection } from '../model/responseRuleCollection';
import { Interceptor } from '../model/models';
import { ApiResponse, CreateResponse, ApiConfig, RequestOptions } from './apis';
type ReponseRuleListParams = {
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
type ResponseRuleCreateParams = {
    /**
    * The identifier for the workspace.
    */
    workspaceId: string;
} & ResponseRuleWrite;
type ResponseRuleDeleteParams = {
    /**
    * The identifier for the workspace.
    */
    workspaceId: string;
    /**
    * Response Rule Id
    */
    responseRuleId: string;
};
type ResponseRuleRetrieveParams = {
    /**
    * The identifier for the workspace.
    */
    workspaceId: string;
    /**
    * Response Rule Id
    */
    responseRuleId: string;
};
type ResponseRuleUpdateParams = {
    /**
    * The identifier for the workspace.
    */
    workspaceId: string;
    /**
    * Response Rule Id
    */
    responseRuleId: string;
} & ResponseRuleWrite;
export declare class ResponseRulesApi {
    protected defaultHeaders: any;
    protected useQuerystring: boolean;
    protected interceptors: Interceptor[];
    protected host: string;
    constructor(config: ApiConfig);
    addInterceptor(interceptor: Interceptor): void;
    /**
     * Returns a list of response rules.
     * @summary List response rules
     * @param workspaceId The identifier for the workspace.
     * @param xApiKey The API key for authentication.
     * @param accept Application specific mime-type.
     * @param limit The number of records to be returned.
     * @param offset The record number to start returning from.
     * @param sortOrder The order in which you require the results to be returned. Either ‘asc’ or ‘desc’
     * @param sortFields The fields that you require the ordering to be performed on. Multiple fields can be provided, separated by a comma.
     */
    list(params?: ReponseRuleListParams, options?: RequestOptions): Promise<ApiResponse<ResponseRuleCollection>>;
    /**
     * ## Response Template Patterns  Each Response Rule has a series of **Patterns** that allow the creator to specify what textual content should be matched in the response SMS or Email, and a number that should be entered when IVR (Voice) is being used.  Each Response Rule can specify as many Response Template Patterns as required.  Each of the Patterns specified will also dynamically create buttons within any Rich Message that is associated with the Response Rule.  This provides an out of the box capability to quickly gather feedback from the field using a Rich User interface, and leveraging SMS as the delivery mechanism.
     * @summary Create a response rule
     * @param workspaceId The identifier for the workspace.
     * @param xApiKey The API key for authentication.
     * @param contentType Application specific mime-type.
     * @param accept Application specific mime-type.
     * @param responseRule
     */
    create(params?: ResponseRuleCreateParams, options?: RequestOptions): Promise<CreateResponse>;
    /**
     * Deletes a Response Rule object.
     * @summary Delete a response rule
     * @param workspaceId The identifier for the workspace.
     * @param xApiKey The API key for authentication.
     * @param responseRuleId Response Rule Id
     */
    delete(params?: ResponseRuleDeleteParams, options?: RequestOptions): Promise<ApiResponse>;
    /**
     * Retrieves a response rule object.
     * @summary Retrieve a response rule
     * @param workspaceId The identifier for the workspace.
     * @param xApiKey The API key for authentication.
     * @param accept Application specific mime-type.
     * @param responseRuleId Response Rule Id
     */
    retrieve(params?: ResponseRuleRetrieveParams, options?: RequestOptions): Promise<ApiResponse<ResponseRule>>;
    /**
     * Updates a Response Rule object.
     * @summary Update a response rule
     * @param workspaceId The identifier for the workspace.
     * @param xApiKey The API key for authentication.
     * @param contentType Application specific mime-type.
     * @param accept Application specific mime-type.
     * @param responseRuleId Response Rule Id
     * @param responseRule Response Rules object used to update Response Rules
     */
    update(params?: ResponseRuleUpdateParams, options?: RequestOptions): Promise<ApiResponse>;
}
export {};
