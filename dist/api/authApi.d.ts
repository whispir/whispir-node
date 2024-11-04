import { Auth } from '../model/auth';
import { Interceptor } from '../model/models';
import { ApiResponse, CreateResponse, ApiConfig, RequestOptions } from './apis';
type AuthCreateParams = {};
type AuthVerificationRetrieveParams = {};
export declare class AuthApi {
    protected defaultHeaders: any;
    protected useQuerystring: boolean;
    protected interceptors: Interceptor[];
    protected host: string;
    constructor(config: ApiConfig);
    addInterceptor(interceptor: Interceptor): void;
    /**
     * Create a JWT authentication token
     * @summary Create an auth token
     * @param xApiKey The API key for authentication.
     * @param contentType Application specific mime-type
     * @param accept Application specific mime-type
     */
    create(params?: AuthCreateParams, options?: RequestOptions): Promise<CreateResponse<Auth>>;
    /**
     * Verify a JWT authentication token
     * @summary Verify an auth token
     * @param xApiKey The API key for authentication.
     * @param accept Application specific mime-type
     */
    retrieveVerification(params?: AuthVerificationRetrieveParams, options?: RequestOptions): Promise<ApiResponse>;
}
export {};
