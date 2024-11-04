import { Activity, ActivityWrite } from '../model/activity';
import { ActivityCollection } from '../model/activityCollection';
import { Interceptor } from '../model/models';
import { ApiResponse, CreateResponse, ApiConfig, RequestOptions } from './apis';
type ActivityCreateParams = {} & ActivityWrite;
type ActivityListParams = {
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
    * /activities?action=Map
    */
    action?: 'Create' | 'Update' | 'Move' | 'Copy' | 'Draft' | 'Send' | 'Modified' | 'Delete' | 'Contact Import File' | 'Login' | 'Approve' | 'Reject' | 'Dispatch' | 'Register' | 'Accept' | 'Closed' | 'Map' | 'Un-map';
    /**
    * /activities?module=Message
    */
    module?: 'System' | 'Message' | 'Scheduled Message' | 'User' | 'Contact' | 'DistributionList' | 'Template' | 'Workspace' | 'Event' | 'WebService' | 'Settings' | 'Conversation' | 'Gateway' | 'Workspace Mapping' | 'Folders' | 'Team' | 'RSS' | 'API Mapping' | 'Asset' | 'Instruction';
    /**
    * /activities?user=james
    */
    user?: string;
    /**
    * /activities?workspace=Whispir.
    */
    workspace?: string;
    /**
    * /activities?status=Successful
    */
    status?: 'Successful' | 'Failed' | 'Rejected';
    /**
    * /activities?description=Imported
    */
    description?: string;
    /**
    * The date and time to start searching from in the format:dd/mm/yyyy hh:mm. This will search on the `time` field <p>/activities?startTime=01/01/2015%2000:00</p>
    */
    startTime?: string;
    /**
    * The date and time to start searching from in the format:dd/mm/yyyy hh:mm <p>/activities?endTime=01/01/2015%2000:00</p>
    */
    endTime?: string;
};
type ActivityWorkspaceListParams = {
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
export declare class ActivitiesApi {
    protected defaultHeaders: any;
    protected useQuerystring: boolean;
    protected interceptors: Interceptor[];
    protected host: string;
    constructor(config: ApiConfig);
    addInterceptor(interceptor: Interceptor): void;
    /**
     * Activities are all the individual changes, tasks, calls, messages and so on performed in a given company workspace. Each activity log entry contains information about the workspace, the module (message, email, IVR ...), the user who performed the activity, time stamps, description of the activity, its status (success, fail) and so on.  All of these help meet auditing and standards compliance and also change tracking. For example: * As a Whispir API user (Voice module), you want to be able to update the Whispir activity log as a call progresses through the IVR to ensure that the auditing shows exactly what information a caller heard.  * As a Whispir API user (SMS module), you want to able to retrieve information from the activity log about all the messages sent by a specific user. As activity information is sensitive, stricter permission rules apply to the data served by these endpoints.  * If the user is a *Company Administrator* or *Company Leader*, retrieving the activity will produce a **_200 OK_** with the valid response * If the user is a *Company Member* or *Company Guest*, they will receive instead a **_403 Forbidden_** response advising that they don’t have permission to access this resource * A *Company Administrator* or *Company Leader* can also create content within the activity stream. They do this through a POST of data to either the _/activities_ endpoint or to the specific activity ID * They must specify a valid _‘Action’_, _‘Description’_ and _‘Status’_ within their request * Posting to the _/activities_ endpoint will create a new activity * Posting to the _/activities/{ID}_ endpoint will append the content to the detail of the specified activity
     * @summary Create an activity
     * @param xApiKey The API key for authentication.
     * @param contentType Application specific mime-type.
     * @param accept Application specific mime-type.
     * @param activity
     */
    create(params?: ActivityCreateParams, options?: RequestOptions): Promise<CreateResponse<Activity>>;
    /**
     * ### Search or Filter on Activity Logs Activity logs can become quickly huge owing to the amount of actions performed. In such cases, to have a proper filtering of data during a GET /activities, Whispir API provides very neat filtering options on the data.  All filter options are to be passed in as URL query parameters.  **Note:** The API currently results in a 404 Not Found when there are no activities present in the log for a given search criteria. This should not be not confused with a failed response. But rather as No Data Found.
     * @summary List activities
     * @param xApiKey The API key for authentication.
     * @param accept Application specific mime-type.
     * @param limit The number of records to be returned.
     * @param offset The record number to start returning from.
     * @param sortOrder The order in which you require the results to be returned. Either ‘asc’ or ‘desc’
     * @param sortFields The fields that you require the ordering to be performed on. Multiple fields can be provided, separated by a comma.
     * @param action /activities?action&#x3D;Map
     * @param module /activities?module&#x3D;Message
     * @param user /activities?user&#x3D;james
     * @param workspace /activities?workspace&#x3D;Whispir.
     * @param status /activities?status&#x3D;Successful
     * @param description /activities?description&#x3D;Imported
     * @param startTime The date and time to start searching from in the format:dd/mm/yyyy hh:mm. This will search on the &#x60;time&#x60; field &lt;p&gt;/activities?startTime&#x3D;01/01/2015%2000:00&lt;/p&gt;
     * @param endTime The date and time to start searching from in the format:dd/mm/yyyy hh:mm &lt;p&gt;/activities?endTime&#x3D;01/01/2015%2000:00&lt;/p&gt;
     */
    list(params?: ActivityListParams, options?: RequestOptions): Promise<ApiResponse<ActivityCollection>>;
    /**
     * ## Restricting to only a single workspace  By default, GET /activities returns all the activities at company level. This covers all the workspaces. So, if the items has to limited to a specific workspace, one has to use the workspace as the endpoint and activities followed by it.
     * @summary List workspace activities
     * @param workspaceId The identifier for the workspace.
     * @param xApiKey The API key for authentication.
     * @param accept Application specific mime-type.
     * @param limit The number of records to be returned.
     * @param offset The record number to start returning from.
     * @param sortOrder The order in which you require the results to be returned. Either ‘asc’ or ‘desc’
     * @param sortFields The fields that you require the ordering to be performed on. Multiple fields can be provided, separated by a comma.
     */
    listByWorkspace(params?: ActivityWorkspaceListParams, options?: RequestOptions): Promise<ApiResponse<ActivityCollection>>;
}
export {};
