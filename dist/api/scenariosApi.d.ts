import { Scenario, ScenarioWrite } from '../model/scenario';
import { ScenarioCollection } from '../model/scenarioCollection';
import { Interceptor } from '../model/models';
import { ApiResponse, CreateResponse, ApiConfig, RequestOptions } from './apis';
type ScenarioCreateParams = {
    /**
    * The identifier for the workspace.
    */
    workspaceId: string;
} & ScenarioWrite;
type ScenarioDeleteParams = {
    /**
    * The identifier for the workspace.
    */
    workspaceId: string;
    /**
    * The id of the Scenarios to be deleted
    */
    scenarioId: string;
};
type ScenarioListParams = {
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
type ScenarioRetrieveParams = {
    /**
    * The identifier for the workspace.
    */
    workspaceId: string;
    /**
    * Enter Scenarios id.
    */
    scenarioId: string;
};
type ScenarioRunCreateParams = {
    /**
    * The identifier for the workspace.
    */
    workspaceId: string;
    /**
    * Enter Scenarios id.
    */
    scenarioId: string;
};
type ScenarioUpdateParams = {
    /**
    * The identifier for the workspace.
    */
    workspaceId: string;
    /**
    * Enter Scenarios id.
    */
    scenarioId: string;
} & ScenarioWrite;
export declare class ScenariosApi {
    protected defaultHeaders: any;
    protected useQuerystring: boolean;
    protected interceptors: Interceptor[];
    protected host: string;
    constructor(config: ApiConfig);
    addInterceptor(interceptor: Interceptor): void;
    /**
     * A scenario is a combination of a message and contacts. So, its structure contains section for both message as well as contact information. API currently only supports creation of scenario with SMS as communication mode.
     * @summary Create a scenario
     * @param workspaceId The identifier for the workspace.
     * @param xApiKey The API key for authentication.
     * @param contentType Application specific mime-type.
     * @param accept Application specific mime-type.
     * @param scenario Scenario list object that needs to be create Scenario
     */
    create(params?: ScenarioCreateParams, options?: RequestOptions): Promise<CreateResponse>;
    /**
     * Deletes a Scenario object.
     * @summary Delete a scenario
     * @param workspaceId The identifier for the workspace.
     * @param xApiKey The API key for authentication.
     * @param scenarioId The id of the Scenarios to be deleted
     */
    delete(params?: ScenarioDeleteParams, options?: RequestOptions): Promise<ApiResponse>;
    /**
     * Returns a list of your scenarios.
     * @summary List scenarios
     * @param workspaceId The identifier for the workspace.
     * @param xApiKey The API key for authentication.
     * @param accept Application specific mime-type.
     * @param limit The number of records to be returned.
     * @param offset The record number to start returning from.
     * @param sortOrder The order in which you require the results to be returned. Either ‘asc’ or ‘desc’
     * @param sortFields The fields that you require the ordering to be performed on. Multiple fields can be provided, separated by a comma.
     */
    list(params?: ScenarioListParams, options?: RequestOptions): Promise<ApiResponse<ScenarioCollection>>;
    /**
     * Retrieves a Scenario object.
     * @summary Retrieve a scenario
     * @param workspaceId The identifier for the workspace.
     * @param xApiKey The API key for authentication.
     * @param accept Application specific mime-type.
     * @param scenarioId Enter Scenarios id.
     */
    retrieve(params?: ScenarioRetrieveParams, options?: RequestOptions): Promise<ApiResponse<Scenario>>;
    /**
     * Running a scenario triggers the communication to the intended recipients. The message (static or dynamic) will be sent on all the provided channels.  Running a scenario is very simple to do. The specific scenario has to called via a /POST request.  Step wise example: 1. Get all the scenarios 2. Pick the required scenario’s link attribute 3. Make a /POST call  Now invoking this scenario is just making a /POST call.
     * @summary Run a scenario
     * @param workspaceId The identifier for the workspace.
     * @param xApiKey The API key for authentication.
     * @param contentType Application specific mime-type.
     * @param accept Application specific mime-type.
     * @param scenarioId Enter Scenarios id.
     */
    createRun(params?: ScenarioRunCreateParams, options?: RequestOptions): Promise<ApiResponse>;
    /**
     * Updates a Scenario object.
     * @summary Update a scenario
     * @param workspaceId The identifier for the workspace.
     * @param xApiKey The API key for authentication.
     * @param contentType Application specific mime-type.
     * @param accept Application specific mime-type.
     * @param scenarioId Enter Scenarios id.
     * @param scenario Modifying a scenario obeys the same requirements seen at the moment of their creation
     */
    update(params?: ScenarioUpdateParams, options?: RequestOptions): Promise<ApiResponse>;
}
export {};
