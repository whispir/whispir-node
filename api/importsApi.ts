/**
 * Whispir Platform API
 * Whispir Platform API for cross channel and multi channel communications. Documentation on each endpoint is available at https://developers.whispir.com.
 *
 * The version of the OpenAPI document: 1.0.3
 * Contact: support@whispir.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import localVarRequest from 'request';
import http from 'http';

/* tslint:disable:no-unused-locals */
import { GetMessages400Response } from '../model/getMessages400Response';
import { GetMessages401Response } from '../model/getMessages401Response';
import { GetMessages403Response } from '../model/getMessages403Response';
import { GetMessages404Response } from '../model/getMessages404Response';
import { GetMessages405Response } from '../model/getMessages405Response';
import { GetMessages415Response } from '../model/getMessages415Response';
import { GetMessages422Response } from '../model/getMessages422Response';
import { GetMessages500Response } from '../model/getMessages500Response';
import { GetMessages501Response } from '../model/getMessages501Response';
import { Import } from '../model/import';

import { ObjectSerializer, Authentication, VoidAuth, Interceptor } from '../model/models';
import { HttpBasicAuth, HttpBearerAuth, ApiKeyAuth, OAuth } from '../model/models';

import { HttpError, RequestFile } from './apis';

let defaultBasePath = 'https://api.au.whispir.com';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum ImportsApiApiKeys {
    ApiKeyAuth,
}

export class ImportsApi {
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

    public setApiKey(key: ImportsApiApiKeys, value: string) {
        (this.authentications as any)[ImportsApiApiKeys[key]].apiKey = value;
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
     * ## Bulk contact import The Whispir API will expose this functionality as a two stage process: 1. Submit contact data within a CSV, JSON, XML payload using the /resource endpoint – which will return a resource ID 2. Create a new import resource by submitting a POST to the /imports endpoint referencing the resource ID created in step 1.  These two stages are further explained below.  Create a resource specifying the contact information  Applications can upload a valid CSV, XML or JSON resource containing the contact information that will be imported into the Whispir Platform. Whispir will return the resource ID which can be used to import or update contacts within a workspace through the imports endpoint as described below.  ### Request Structure Firstly, the application needs to upload a resource using the Creating Resources.  The resource that needs to be provided for contact importing should be in one the following format: *   XML *   JSON *   CSV  Once this resource has been imported with the appropriate mime type, the application can reference this resource within the import request.  Import a resource using the imports endpoint    After receiving a valid resource ID, applications can make a request to the imports endpoint within a workspace and reference the appropriate resource ID. Whispir will then create an import process that will import the specified data into the workspace.    Once the application has an appropriate resource ID to use within the import endpoint, the following request can be used to begin the import process.    **Note:** Import processes take place asynchronously. Any contacts will be created once the import process starts, and users will be able to utilise imported contacts as soon as each is completed. 
     * @summary Create an import
     * @param workspaceId The identifier for the workspace.
     * @param xApiKey The API key for authentication.
     * @param contentType Application specific mime-type.
     * @param accept Application specific mime-type.
     * @param _import import object that needs to be create import
     */
    public async postImports (workspaceId: string, xApiKey: string, contentType: 'application/vnd.whispir.importcontact-v1+json' | 'application/vnd.whispir.importcontact-v1+xml', accept: 'application/vnd.whispir.importcontact-v1+json' | 'application/vnd.whispir.importcontact-v1+xml', _import?: Import, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body?: any;  }> {
        const localVarPath = this.basePath + '/workspaces/{workspaceId}/imports'
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
            throw new Error('Required parameter workspaceId was null or undefined when calling postImports.');
        }

        // verify required parameter 'xApiKey' is not null or undefined
        if (xApiKey === null || xApiKey === undefined) {
            throw new Error('Required parameter xApiKey was null or undefined when calling postImports.');
        }

        // verify required parameter 'contentType' is not null or undefined
        if (contentType === null || contentType === undefined) {
            throw new Error('Required parameter contentType was null or undefined when calling postImports.');
        }

        // verify required parameter 'accept' is not null or undefined
        if (accept === null || accept === undefined) {
            throw new Error('Required parameter accept was null or undefined when calling postImports.');
        }

        localVarHeaderParams['X-Api-Key'] = ObjectSerializer.serialize(xApiKey, "string");
        localVarHeaderParams['Content-Type'] = ObjectSerializer.serialize(contentType, "'application/vnd.whispir.importcontact-v1+json' | 'application/vnd.whispir.importcontact-v1+xml'");
        localVarHeaderParams['Accept'] = ObjectSerializer.serialize(accept, "'application/vnd.whispir.importcontact-v1+json' | 'application/vnd.whispir.importcontact-v1+xml'");
        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(_import, "Import")
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
