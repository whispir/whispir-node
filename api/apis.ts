export * from './activitiesApi';
export * from './authApi';
export * from './callbacksApi';
export * from './contactsApi';
export * from './customListsApi';
export * from './distributionListsApi';
export * from './eventsApi';
export * from './importsApi';
export * from './keysApi';
export * from './messagesApi';
export * from './resourcesApi';
export * from './responseRulesApi';
export * from './scenariosApi';
export * from './templatesApi';
export * from './usersApi';
export * from './workspacesApi';
import * as http from 'http';
import { ApiError } from '../model/models';

export class HttpError extends Error {
    constructor(public body: ApiError) {
        super(body.errorText);
        this.name = 'HttpError';
    }
};

export type ApiConfig = {
    /**
     * The default header to be included in the request
     */
    defaultHeaders: { [name: string]: string };
    /**
     * The host domain that requests will be made to
     */
    host: string;
};

export type RequestOptions = {
    /**
     * The additional headers to be included in the request
     */
    headers: { [name: string]: string };
};

export type ApiResponse<T = {}> = T & {
    /**
     * The last response, useful to get direct access to response headers
     */
    lastResponse: http.IncomingMessage;
};

export type CreateResponse<T = {}> = ApiResponse<T> & {
    /**
     * The resource identifier
     */
    id: string;
};

export { RequestFile } from '../model/models';
