/**
 * Whispir Platform API
 * Whispir Platform API for cross channel and multi channel communications. Documentation on each endpoint is available at https://developers.whispir.com.
 *
 * The version of the OpenAPI document: 1.0.4
 * Contact: support@whispir.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import localVarRequest from 'request';
import http from 'http';

/* tslint:disable:no-unused-locals */
import { GetDistributionLists200Response } from '../model/getDistributionLists200Response';
import { GetDistributionLists200ResponseDistributionLists } from '../model/getDistributionLists200ResponseDistributionLists';
import { GetMessages400Response } from '../model/getMessages400Response';
import { GetMessages401Response } from '../model/getMessages401Response';
import { GetMessages403Response } from '../model/getMessages403Response';
import { GetMessages404Response } from '../model/getMessages404Response';
import { GetMessages405Response } from '../model/getMessages405Response';
import { GetMessages415Response } from '../model/getMessages415Response';
import { GetMessages422Response } from '../model/getMessages422Response';
import { GetMessages500Response } from '../model/getMessages500Response';
import { GetMessages501Response } from '../model/getMessages501Response';

import { ObjectSerializer, Authentication, VoidAuth, Interceptor } from '../model/models';
import { HttpBasicAuth, HttpBearerAuth, ApiKeyAuth, OAuth } from '../model/models';

import { HttpError, RequestFile } from './apis';

let defaultBasePath = 'https://api.au.whispir.com';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum DistributionListsApiApiKeys {
    ApiKeyAuth,
}

export class DistributionListsApi {
    protected _basePath = defaultBasePath;
    protected _defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'ApiKeyAuth': new ApiKeyAuth('header', 'Api-Key'),
        'BasicAuth': new HttpBasicAuth(),
    }

    protected interceptors: Interceptor[] = [];

    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            this.username = basePathOrUsername;
            this.password = password
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    set defaultHeaders(defaultHeaders: any) {
        this._defaultHeaders = defaultHeaders;
    }

    get defaultHeaders() {
        return this._defaultHeaders;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
        this.authentications.default = auth;
    }

    public setApiKey(key: DistributionListsApiApiKeys, value: string) {
        (this.authentications as any)[DistributionListsApiApiKeys[key]].apiKey = value;
    }

    set username(username: string) {
        this.authentications.BasicAuth.username = username;
    }

    set password(password: string) {
        this.authentications.BasicAuth.password = password;
    }

    public addInterceptor(interceptor: Interceptor) {
        this.interceptors.push(interceptor);
    }

    /**
     * You can only delete the distribution list that you have created or a valid userId associated with the specific distribution list. 
     * @summary Delete a distribution list
     * @param workspaceId The identifier for the workspace.
     * @param xApiKey The API key for authentication.
     * @param distributionlistId The id of the distributionlists to be deleted
     */
    public async deleteDistributionListsById (workspaceId: string, xApiKey: string, distributionlistId: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body?: any;  }> {
        const localVarPath = this.basePath + '/workspaces/{workspaceId}/distributionlists/{distributionlistId}'
            .replace('{' + 'workspaceId' + '}', encodeURIComponent(String(workspaceId)))
            .replace('{' + 'distributionlistId' + '}', encodeURIComponent(String(distributionlistId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'workspaceId' is not null or undefined
        if (workspaceId === null || workspaceId === undefined) {
            throw new Error('Required parameter workspaceId was null or undefined when calling deleteDistributionListsById.');
        }

        // verify required parameter 'xApiKey' is not null or undefined
        if (xApiKey === null || xApiKey === undefined) {
            throw new Error('Required parameter xApiKey was null or undefined when calling deleteDistributionListsById.');
        }

        // verify required parameter 'distributionlistId' is not null or undefined
        if (distributionlistId === null || distributionlistId === undefined) {
            throw new Error('Required parameter distributionlistId was null or undefined when calling deleteDistributionListsById.');
        }

        localVarHeaderParams['X-Api-Key'] = ObjectSerializer.serialize(xApiKey, "string");
        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'DELETE',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.ApiKeyAuth.apiKey) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.ApiKeyAuth.applyToRequest(localVarRequestOptions));
        }
        if (this.authentications.BasicAuth.username && this.authentications.BasicAuth.password) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.BasicAuth.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

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
            return new Promise<{ response: http.IncomingMessage; body?: any;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * The distribution list is usually retrieved by its id, but one can also search or refer to the distribution list by its name. This feature has to do with the unique name requirement for the distribution list.  Apart from the name, the description field can also be used to search for a distribution list. While name can be directly used to send in messages, the description is solely for the purpose of search. Once search yields the required result, the mri has to be picked from the selected DL and then used to send the messages.  Both these operations can be performed by passing in the relevant search parameters in the URL as query params.
     * @summary List distribution lists
     * @param workspaceId The identifier for the workspace.
     * @param xApiKey The API key for authentication.
     * @param accept Application specific mime-type.
     * @param limit The number of records to be returned.
     * @param offset The record number to start returning from.
     * @param sortOrder The order in which you require the results to be returned. Either ‘asc’ or ‘desc’
     * @param sortFields The fields that you require the ordering to be performed on. Multiple fields can be provided, separated by a comma.
     * @param name Specifies the name of the Distribution List to be searched for. It is based on the uniqueness of the name of the Distribution List. If the name contains spaces it is suggested - but not required - to escape them
     * @param description Specifies the descrition for the Distribution List to be searched for. If the description contains spaces it is suggested - but not required - to escape them
     */
    public async getDistributionLists (workspaceId: string, xApiKey: string, accept: 'application/vnd.whispir.distributionlist-v1+json' | 'application/vnd.whispir.distributionlist-v1+xml', limit?: number, offset?: number, sortOrder?: 'asc' | 'desc', sortFields?: string, name?: string, description?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: GetDistributionLists200Response;  }> {
        const localVarPath = this.basePath + '/workspaces/{workspaceId}/distributionlists'
            .replace('{' + 'workspaceId' + '}', encodeURIComponent(String(workspaceId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'workspaceId' is not null or undefined
        if (workspaceId === null || workspaceId === undefined) {
            throw new Error('Required parameter workspaceId was null or undefined when calling getDistributionLists.');
        }

        // verify required parameter 'xApiKey' is not null or undefined
        if (xApiKey === null || xApiKey === undefined) {
            throw new Error('Required parameter xApiKey was null or undefined when calling getDistributionLists.');
        }

        // verify required parameter 'accept' is not null or undefined
        if (accept === null || accept === undefined) {
            throw new Error('Required parameter accept was null or undefined when calling getDistributionLists.');
        }

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

        if (name !== undefined) {
            localVarQueryParameters['name'] = ObjectSerializer.serialize(name, "string");
        }

        if (description !== undefined) {
            localVarQueryParameters['description'] = ObjectSerializer.serialize(description, "string");
        }

        localVarHeaderParams['X-Api-Key'] = ObjectSerializer.serialize(xApiKey, "string");
        localVarHeaderParams['Accept'] = ObjectSerializer.serialize(accept, "'application/vnd.whispir.distributionlist-v1+json' | 'application/vnd.whispir.distributionlist-v1+xml'");
        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.ApiKeyAuth.apiKey) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.ApiKeyAuth.applyToRequest(localVarRequestOptions));
        }
        if (this.authentications.BasicAuth.username && this.authentications.BasicAuth.password) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.BasicAuth.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

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
            return new Promise<{ response: http.IncomingMessage; body: GetDistributionLists200Response;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "GetDistributionLists200Response");
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * A distribution list allows you to associate the following:  *   **ContactIds** (type:String) is a comma separated list of Contact IDs that you would like added to the list. *   **UserIds** (type:String) specifies the Whispir Users that should also be notified when this list is used. *   **DistListIds** (type:String) specifies the nested lists that are contained within this distribution list.  Any or all three of these can be updated via the PUT method along with the DL properties (name, description, location etc).  The steps usually are:  1. Create a Distribution List (DL) 2. While creating the DL itself, you can put in the ContactIds, UserIds, distListIds (nested) so that the DL is created with those values readily placed in. 3. After the DL is created, if you want to add/update the values, then 4. Do a GET request to retrieve the specific DL.    -  This will return you the DL object 5. Modify the DL properties (name, description, contactIds, UserIds, dlIds, location etc) as needed 6. Do a PUT request to update the DL details    -  Successful update gives you a 204 No Content    -  The contactIds, userIds, distListIds can be passed all together in a single request.  Note: 1.  If an existing contactId is again added, it does neither throws an error, nor create two entries. The contactId is just neglected and only 1 record is maintained. 2.  If the PUT request was successful, the expected response code is a 204 No Content 3.  For Modifying the Location Information refer to Location Tags for Distribution Lists 
     * @summary Retrieve a distribution list
     * @param workspaceId The identifier for the workspace.
     * @param xApiKey The API key for authentication.
     * @param accept Application specific mime-type.
     * @param distributionlistId Enter Distribution id.
     */
    public async getDistributionListsById (workspaceId: string, xApiKey: string, accept: 'application/vnd.whispir.distributionlist-v1+json' | 'application/vnd.whispir.distributionlist-v1+xml', distributionlistId: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: GetDistributionLists200ResponseDistributionLists;  }> {
        const localVarPath = this.basePath + '/workspaces/{workspaceId}/distributionlists/{distributionlistId}'
            .replace('{' + 'workspaceId' + '}', encodeURIComponent(String(workspaceId)))
            .replace('{' + 'distributionlistId' + '}', encodeURIComponent(String(distributionlistId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'workspaceId' is not null or undefined
        if (workspaceId === null || workspaceId === undefined) {
            throw new Error('Required parameter workspaceId was null or undefined when calling getDistributionListsById.');
        }

        // verify required parameter 'xApiKey' is not null or undefined
        if (xApiKey === null || xApiKey === undefined) {
            throw new Error('Required parameter xApiKey was null or undefined when calling getDistributionListsById.');
        }

        // verify required parameter 'accept' is not null or undefined
        if (accept === null || accept === undefined) {
            throw new Error('Required parameter accept was null or undefined when calling getDistributionListsById.');
        }

        // verify required parameter 'distributionlistId' is not null or undefined
        if (distributionlistId === null || distributionlistId === undefined) {
            throw new Error('Required parameter distributionlistId was null or undefined when calling getDistributionListsById.');
        }

        localVarHeaderParams['X-Api-Key'] = ObjectSerializer.serialize(xApiKey, "string");
        localVarHeaderParams['Accept'] = ObjectSerializer.serialize(accept, "'application/vnd.whispir.distributionlist-v1+json' | 'application/vnd.whispir.distributionlist-v1+xml'");
        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.ApiKeyAuth.apiKey) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.ApiKeyAuth.applyToRequest(localVarRequestOptions));
        }
        if (this.authentications.BasicAuth.username && this.authentications.BasicAuth.password) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.BasicAuth.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

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
            return new Promise<{ response: http.IncomingMessage; body: GetDistributionLists200ResponseDistributionLists;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "GetDistributionLists200ResponseDistributionLists");
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * Distribution lists can be created within the Default Workspace, or within a Specific Workspace. More information on Workspaces will be provided later in this documentation.  The MRI value is important here. It is the required unique identifier for any communications that are to be sent out to this distribution list. 
     * @summary Create a distribution list
     * @param workspaceId The identifier for the workspace.
     * @param xApiKey The API key for authentication.
     * @param contentType Application specific mime-type.
     * @param accept Application specific mime-type.
     * @param getDistributionLists200ResponseDistributionLists Distribution list object that needs to be create Distribution list
     */
    public async postDistributionLists (workspaceId: string, xApiKey: string, contentType: 'application/vnd.whispir.distributionlist-v1+json' | 'application/vnd.whispir.distributionlist-v1+xml', accept: 'application/vnd.whispir.distributionlist-v1+json' | 'application/vnd.whispir.distributionlist-v1+xml', getDistributionLists200ResponseDistributionLists: GetDistributionLists200ResponseDistributionLists, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: GetDistributionLists200ResponseDistributionLists;  }> {
        const localVarPath = this.basePath + '/workspaces/{workspaceId}/distributionlists'
            .replace('{' + 'workspaceId' + '}', encodeURIComponent(String(workspaceId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'workspaceId' is not null or undefined
        if (workspaceId === null || workspaceId === undefined) {
            throw new Error('Required parameter workspaceId was null or undefined when calling postDistributionLists.');
        }

        // verify required parameter 'xApiKey' is not null or undefined
        if (xApiKey === null || xApiKey === undefined) {
            throw new Error('Required parameter xApiKey was null or undefined when calling postDistributionLists.');
        }

        // verify required parameter 'contentType' is not null or undefined
        if (contentType === null || contentType === undefined) {
            throw new Error('Required parameter contentType was null or undefined when calling postDistributionLists.');
        }

        // verify required parameter 'accept' is not null or undefined
        if (accept === null || accept === undefined) {
            throw new Error('Required parameter accept was null or undefined when calling postDistributionLists.');
        }

        // verify required parameter 'getDistributionLists200ResponseDistributionLists' is not null or undefined
        if (getDistributionLists200ResponseDistributionLists === null || getDistributionLists200ResponseDistributionLists === undefined) {
            throw new Error('Required parameter getDistributionLists200ResponseDistributionLists was null or undefined when calling postDistributionLists.');
        }

        localVarHeaderParams['X-Api-Key'] = ObjectSerializer.serialize(xApiKey, "string");
        localVarHeaderParams['Content-Type'] = ObjectSerializer.serialize(contentType, "'application/vnd.whispir.distributionlist-v1+json' | 'application/vnd.whispir.distributionlist-v1+xml'");
        localVarHeaderParams['Accept'] = ObjectSerializer.serialize(accept, "'application/vnd.whispir.distributionlist-v1+json' | 'application/vnd.whispir.distributionlist-v1+xml'");
        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(getDistributionLists200ResponseDistributionLists, "GetDistributionLists200ResponseDistributionLists")
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.ApiKeyAuth.apiKey) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.ApiKeyAuth.applyToRequest(localVarRequestOptions));
        }
        if (this.authentications.BasicAuth.username && this.authentications.BasicAuth.password) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.BasicAuth.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

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
            return new Promise<{ response: http.IncomingMessage; body: GetDistributionLists200ResponseDistributionLists;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "GetDistributionLists200ResponseDistributionLists");
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * Any or all three of these can be updated via the PUT method along with the DL properties (name, description, location etc).  The steps usually are: 1.  Create a Distribution List (DL) 2.  While creating the DL itself, you can put in the ContactIds, UserIds, distListIds (nested) so that the DL is created with those values readily placed in. 3.  After the DL is created, if you want to add/update the values, then 4.  Do a GET request to retrieve the specific DL.     - This will return you the DL object 5.  Modify the DL properties (name, description, contactIds, UserIds, dlIds, location etc) as needed 6.  Do a PUT request to update the DL details     - Successful update gives you a 204 No Content     - The contactIds, userIds, distListIds can be passed all together in a single request.  Note: - If an existing contactId is again added, it does neither throws an error, nor create two entries. The contactId is just neglected and only 1 record is maintained. - If the PUT request was successful, the expected response code is a 204 No Content - For Modifying the Location Information refer to Location Tags for Distribution Lists 
     * @summary Update a distribution list
     * @param workspaceId The identifier for the workspace.
     * @param xApiKey The API key for authentication.
     * @param contentType Application specific mime-type.
     * @param accept Application specific mime-type.
     * @param distributionlistId Enter Distribution id.
     * @param getDistributionLists200ResponseDistributionLists Distribution list object that needs to be update Distribution list
     */
    public async putDistributionListsById (workspaceId: string, xApiKey: string, contentType: 'application/vnd.whispir.distributionlist-v1+json' | 'application/vnd.whispir.distributionlist-v1+xml', accept: 'application/vnd.whispir.distributionlist-v1+json' | 'application/vnd.whispir.distributionlist-v1+xml', distributionlistId: string, getDistributionLists200ResponseDistributionLists: GetDistributionLists200ResponseDistributionLists, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body?: any;  }> {
        const localVarPath = this.basePath + '/workspaces/{workspaceId}/distributionlists/{distributionlistId}'
            .replace('{' + 'workspaceId' + '}', encodeURIComponent(String(workspaceId)))
            .replace('{' + 'distributionlistId' + '}', encodeURIComponent(String(distributionlistId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'workspaceId' is not null or undefined
        if (workspaceId === null || workspaceId === undefined) {
            throw new Error('Required parameter workspaceId was null or undefined when calling putDistributionListsById.');
        }

        // verify required parameter 'xApiKey' is not null or undefined
        if (xApiKey === null || xApiKey === undefined) {
            throw new Error('Required parameter xApiKey was null or undefined when calling putDistributionListsById.');
        }

        // verify required parameter 'contentType' is not null or undefined
        if (contentType === null || contentType === undefined) {
            throw new Error('Required parameter contentType was null or undefined when calling putDistributionListsById.');
        }

        // verify required parameter 'accept' is not null or undefined
        if (accept === null || accept === undefined) {
            throw new Error('Required parameter accept was null or undefined when calling putDistributionListsById.');
        }

        // verify required parameter 'distributionlistId' is not null or undefined
        if (distributionlistId === null || distributionlistId === undefined) {
            throw new Error('Required parameter distributionlistId was null or undefined when calling putDistributionListsById.');
        }

        // verify required parameter 'getDistributionLists200ResponseDistributionLists' is not null or undefined
        if (getDistributionLists200ResponseDistributionLists === null || getDistributionLists200ResponseDistributionLists === undefined) {
            throw new Error('Required parameter getDistributionLists200ResponseDistributionLists was null or undefined when calling putDistributionListsById.');
        }

        localVarHeaderParams['X-Api-Key'] = ObjectSerializer.serialize(xApiKey, "string");
        localVarHeaderParams['Content-Type'] = ObjectSerializer.serialize(contentType, "'application/vnd.whispir.distributionlist-v1+json' | 'application/vnd.whispir.distributionlist-v1+xml'");
        localVarHeaderParams['Accept'] = ObjectSerializer.serialize(accept, "'application/vnd.whispir.distributionlist-v1+json' | 'application/vnd.whispir.distributionlist-v1+xml'");
        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'PUT',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(getDistributionLists200ResponseDistributionLists, "GetDistributionLists200ResponseDistributionLists")
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.ApiKeyAuth.apiKey) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.ApiKeyAuth.applyToRequest(localVarRequestOptions));
        }
        if (this.authentications.BasicAuth.username && this.authentications.BasicAuth.password) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.BasicAuth.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

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
            return new Promise<{ response: http.IncomingMessage; body?: any;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
}
