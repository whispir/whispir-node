import { ImportWrite } from '../model/import';
import { Interceptor } from '../model/models';
import { CreateResponse, ApiConfig, RequestOptions } from './apis';
type ImportCreateParams = {
    /**
    * The identifier for the workspace.
    */
    workspaceId: string;
} & ImportWrite;
export declare class ImportsApi {
    protected defaultHeaders: any;
    protected useQuerystring: boolean;
    protected interceptors: Interceptor[];
    protected host: string;
    constructor(config: ApiConfig);
    addInterceptor(interceptor: Interceptor): void;
    /**
     * ## Bulk contact import The Whispir API will expose this functionality as a two stage process: 1. Submit contact data within a CSV, JSON, XML payload using the /resource endpoint – which will return a resource ID 2. Create a new import resource by submitting a POST to the /imports endpoint referencing the resource ID created in step 1.  These two stages are further explained below.  Create a resource specifying the contact information  Applications can upload a valid CSV, XML or JSON resource containing the contact information that will be imported into the Whispir Platform. Whispir will return the resource ID which can be used to import or update contacts within a workspace through the imports endpoint as described below.  ### Request Structure Firstly, the application needs to upload a resource using the Creating Resources.  The resource that needs to be provided for contact importing should be in one the following format: *   XML *   JSON *   CSV  Once this resource has been imported with the appropriate mime type, the application can reference this resource within the import request.  Import a resource using the imports endpoint    After receiving a valid resource ID, applications can make a request to the imports endpoint within a workspace and reference the appropriate resource ID. Whispir will then create an import process that will import the specified data into the workspace.    Once the application has an appropriate resource ID to use within the import endpoint, the following request can be used to begin the import process.    **Note:** Import processes take place asynchronously. Any contacts will be created once the import process starts, and users will be able to utilise imported contacts as soon as each is completed.
     * @summary Create an import
     * @param workspaceId The identifier for the workspace.
     * @param xApiKey The API key for authentication.
     * @param contentType Application specific mime-type.
     * @param accept Application specific mime-type.
     * @param _import import object that needs to be create import
     */
    create(params?: ImportCreateParams, options?: RequestOptions): Promise<CreateResponse>;
}
export {};
