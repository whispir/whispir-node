import localVarRequest from 'request';
import http from 'http';

/* tslint:disable:no-unused-locals */
import { ApiError, ApiErrorWrite } from '../model/apiError';
import { Workspace, WorkspaceWrite } from '../model/workspace';
import { WorkspaceCollection, WorkspaceCollectionWrite } from '../model/workspaceCollection';
import { ObjectSerializer, Interceptor } from '../model/models';
import { HttpError, RequestFile, ApiConfig, RequestOptions } from './apis';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export class WorkspacesApi {
    protected defaultHeaders: any = {};
    protected useQuerystring: boolean = false;
    protected interceptors: Interceptor[] = [];
    protected host: string;

    constructor(config: ApiConfig) {
        this.defaultHeaders = config.defaultHeaders;
        this.host = config.host;
    }

    public addInterceptor(interceptor: Interceptor) {
        this.interceptors.push(interceptor);
    }

    /**
     * Returns a list of your workspaces.
     * @summary List workspaces
     * @param xApiKey The API key for authentication.
     * @param accept Application specific mime-type.
     * @param limit The number of records to be returned.
     * @param offset The record number to start returning from.
     * @param sortOrder The order in which you require the results to be returned. Either ‘asc’ or ‘desc’
     * @param sortFields The fields that you require the ordering to be performed on. Multiple fields can be provided, separated by a comma.
     */
    public async list(params?: {
        limit?: number,
        offset?: number,
        sortOrder?: 'asc' | 'desc',
        sortFields?: string,
    }, options?: RequestOptions): Promise<{ lastResponse: http.IncomingMessage } & WorkspaceCollection> {
        const {
            limit = 20,
            offset = 0,
            sortOrder,
            sortFields,
        } = params || {};

        const localVarPath = this.host + '/workspaces';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);

        let localVarFormParams: any = {};
        if (limit !== undefined) {
            localVarQueryParameters['limit'] = ObjectSerializer.serialize(limit, "number");
        }
        if (offset !== undefined) {
            localVarQueryParameters['offset'] = ObjectSerializer.serialize(offset, "number");
        }
        if (sortOrder !== undefined) {
            localVarQueryParameters['sortOrder'] = ObjectSerializer.serialize(sortOrder, "'asc' | 'desc'");
        }
        if (sortFields !== undefined) {
            localVarQueryParameters['sortFields'] = ObjectSerializer.serialize(sortFields, "string");
        }
        localVarHeaderParams['Accept'] = 'application/vnd.whispir.workspace-v1+json';
        (<any>Object).assign(localVarHeaderParams, options?.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this.useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }

            return new Promise((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "WorkspaceCollection");
                            
                            resolve({ lastResponse: response.toJSON(), ...body });
                        } else {
                            reject(new HttpError(body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * Use GET on a Workspace Id to verify it is a valid Workspace ID, and see a list of all the other endpoint URIs in that workspace
     * @summary Retrieve a workspace
     * @param workspaceId The identifier for the workspace.
     * @param xApiKey The API key for authentication.
     * @param accept Application specific mime-type.
     */
    public async retrieve(params?: {
        workspaceId: string,
    }, options?: RequestOptions): Promise<{ lastResponse: http.IncomingMessage } & Workspace> {
        const {
            workspaceId,
        } = params || {};

        const localVarPath = this.host + '/workspaces/{workspaceId}'
            .replace('{' + 'workspaceId' + '}', encodeURIComponent(String(workspaceId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);

        let localVarFormParams: any = {};
        localVarHeaderParams['Accept'] = 'application/vnd.whispir.workspace-v1+json';
        (<any>Object).assign(localVarHeaderParams, options?.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this.useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }

            return new Promise((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "Workspace");
                            
                            resolve({ lastResponse: response.toJSON(), ...body });
                        } else {
                            reject(new HttpError(body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * Note: There is no limit to the amount of workspaces each API user can create. 
     * @summary Create a workspace
     * @param xApiKey The API key for authentication.
     * @param contentType Application specific mime-type.
     * @param accept Application specific mime-type.
     * @param workspace Create a workspace
     */
    public async create(params?: {
    } & WorkspaceWrite, options?: RequestOptions): Promise<{ lastResponse: http.IncomingMessage, id: string } & Workspace> {
        const {
            ...workspace
        } = params || {};

        const localVarPath = this.host + '/workspaces';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);

        let localVarFormParams: any = {};
        localVarHeaderParams['Content-Type'] = 'application/vnd.whispir.workspace-v1+json';
        localVarHeaderParams['Accept'] = 'application/vnd.whispir.workspace-v1+json';
        (<any>Object).assign(localVarHeaderParams, options?.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this.useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(workspace, "Workspace")
        };

        let authenticationPromise = Promise.resolve();

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }

            return new Promise((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "Workspace");
                            
                            // Special case to extract the resource identifier from the `Location` header.
                            const checkLocation = response?.headers?.location?.match(/\/([^\/]+)\/?$/);
                            let id = (checkLocation && checkLocation[1]) ? checkLocation[1] : undefined;
                            
                            resolve({ lastResponse: response.toJSON(), id, ...body });
                        } else {
                            reject(new HttpError(body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * Update a workspace endpoint
     * @summary Update a workspace
     * @param workspaceId The identifier for the workspace.
     * @param xApiKey The API key for authentication.
     * @param contentType Application specific mime-type.
     * @param accept Application specific mime-type.
     * @param workspace Update a workspace
     */
    public async update(params?: {
        workspaceId: string,
    } & WorkspaceWrite, options?: RequestOptions): Promise<{ lastResponse: http.IncomingMessage } & Workspace> {
        const {
            workspaceId,
            ...workspace
        } = params || {};

        const localVarPath = this.host + '/workspaces/{workspaceId}'
            .replace('{' + 'workspaceId' + '}', encodeURIComponent(String(workspaceId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);

        let localVarFormParams: any = {};
        localVarHeaderParams['Content-Type'] = 'application/vnd.whispir.workspace-v1+json';
        localVarHeaderParams['Accept'] = 'application/vnd.whispir.workspace-v1+json';
        (<any>Object).assign(localVarHeaderParams, options?.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'PUT',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this.useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(workspace, "Workspace")
        };

        let authenticationPromise = Promise.resolve();

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }

            return new Promise((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "Workspace");
                            
                            resolve({ lastResponse: response.toJSON(), ...body });
                        } else {
                            reject(new HttpError(body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
}
