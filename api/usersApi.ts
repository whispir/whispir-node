import localVarRequest from 'request';
import http from 'http';

/* tslint:disable:no-unused-locals */
import { ApiError, ApiErrorWrite } from '../model/apiError';
import { User, UserWrite } from '../model/user';
import { UserCollection, UserCollectionWrite } from '../model/userCollection';
import { ObjectSerializer, Interceptor } from '../model/models';
import { HttpError, RequestFile, ApiConfig, RequestOptions } from './apis';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export class UsersApi {
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
     * Delete all users in the company.  **Note**: use this endpoint with caution!
     * @summary Delete all users
     * @param xApiKey The API key for authentication.
     * @param contentType Application specific mime-type.
     * @param accept User accept.
     */
    public async deleteAll(params?: {
    }, options?: RequestOptions): Promise<{ lastResponse: http.IncomingMessage }> {
        const {
        } = params || {};

        const localVarPath = this.host + '/users';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);

        let localVarFormParams: any = {};
        localVarHeaderParams['Content-Type'] = 'application/vnd.whispir.user-v1+json';
        localVarHeaderParams['Accept'] = 'application/vnd.whispir.user-v1+json';
        (<any>Object).assign(localVarHeaderParams, options?.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'DELETE',
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
     * After performing this request, the response does not contain any information other than the headers as it is not necessary.  The delete a user if successful shall respond with a 204 No Content. 
     * @summary Delete a user
     * @param xApiKey The API key for authentication.
     * @param userId Enter User id
     * @param contentType Application specific mime-type.
     * @param accept User accept.
     */
    public async delete(params?: {
        userId: string,
    }, options?: RequestOptions): Promise<{ lastResponse: http.IncomingMessage }> {
        const {
            userId,
        } = params || {};

        const localVarPath = this.host + '/users/{userId}'
            .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);

        let localVarFormParams: any = {};
        localVarHeaderParams['Content-Type'] = 'application/vnd.whispir.user-v1+json';
        localVarHeaderParams['Accept'] = 'application/vnd.whispir.user-v1+json';
        (<any>Object).assign(localVarHeaderParams, options?.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'DELETE',
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
     * Retrieve a list of users in the account. The result will only be limited to users with ACTIVE status. User’s with other status will not be listed in the results.  Once the request is placed, the response will be a list of url’s to each of the users that the API user has access to/or has requested for via the search criteria.  **Note:** The sample request here shows users from the company the existing API user is associated with. You cannot retrieve users list from outside of your company and users with status != ACTIVE.  ## Retrieving workspace users To retrieve the list of users, the request is made to via GET to `/workspaces/{workspaceId}/users` endpoint.  By default there will be a limit of 20 users returned in a request.  The user will use the limit and offset query parameters to determine how many users they would like to receive. (default when not provided will be limit=20 & offset=0)  ### Searching for users Users can be searched for in a given company by passing in valid search criteria. The search criteria usually can be any of the following user elements (field names) and will be sent in as part of the URI as query parameters. *   First Name *   Last Name *   Title *   Job Title *   Country *   Timezone *   Organization Name *   Division *   Business Unit *   Department *   Team Name *   Role *   Additional Team Name *   Additional Role *   Work Email Address 1 *   Work Mobile Phone 1 *   Work Phone Area Code 1 *   Work Phone 1 *   Status * (see note below)  **Note:** While searching for users via status, use the short code ‘A’ for ACTIVE, similarly, \'I’ for INACTIVE, rather than the full words ACTIVE, INACTIVE, etc. so, it is &status=A not &status=ACTIVE. 
     * @summary List users
     * @param xApiKey The API key for authentication.
     * @param accept User accept.
     * @param fieldname A filter on the User attributes. Only Users with matching attributes will be returned.
     * @param sortOrder The order in which you require the results to be returned. Either ‘asc’ or ‘desc’
     * @param sortFields The fields that you require the ordering to be performed on. Multiple fields can be provided, separated by a comma.
     * @param limit The number of records to be returned.
     * @param offset The record number to start returning from.
     */
    public async list(params?: {
        fieldname?: string,
        sortOrder?: 'asc' | 'desc',
        sortFields?: string,
        limit?: number,
        offset?: number,
    }, options?: RequestOptions): Promise<{ lastResponse: http.IncomingMessage } & UserCollection> {
        const {
            fieldname,
            sortOrder,
            sortFields,
            limit = 20,
            offset = 0,
        } = params || {};

        const localVarPath = this.host + '/users';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);

        let localVarFormParams: any = {};
        if (fieldname !== undefined) {
            localVarQueryParameters['fieldname'] = ObjectSerializer.serialize(fieldname, "string");
        }
        if (sortOrder !== undefined) {
            localVarQueryParameters['sortOrder'] = ObjectSerializer.serialize(sortOrder, "'asc' | 'desc'");
        }
        if (sortFields !== undefined) {
            localVarQueryParameters['sortFields'] = ObjectSerializer.serialize(sortFields, "string");
        }
        if (limit !== undefined) {
            localVarQueryParameters['limit'] = ObjectSerializer.serialize(limit, "number");
        }
        if (offset !== undefined) {
            localVarQueryParameters['offset'] = ObjectSerializer.serialize(offset, "number");
        }
        localVarHeaderParams['Accept'] = 'application/vnd.whispir.user-v1+json';
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
                            body = ObjectSerializer.deserialize(body, "UserCollection");
                            
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
     * Retrieves a User object.
     * @summary Retrieve a user
     * @param xApiKey The API key for authentication.
     * @param userId The identifier for the User.
     * @param accept User accept.
     */
    public async retrieve(params?: {
        userId: string,
    }, options?: RequestOptions): Promise<{ lastResponse: http.IncomingMessage } & User> {
        const {
            userId,
        } = params || {};

        const localVarPath = this.host + '/users/{userId}'
            .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);

        let localVarFormParams: any = {};
        localVarHeaderParams['Accept'] = 'application/vnd.whispir.user-v1+json';
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
                            body = ObjectSerializer.deserialize(body, "User");
                            
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
     * Returns a list of your Users.
     * @summary List workspace users
     * @param workspaceId The identifier for the workspace.
     * @param xApiKey The API key for authentication.
     * @param accept User accept.
     * @param sortOrder The order in which you require the results to be returned. Either ‘asc’ or ‘desc’
     * @param sortFields The fields that you require the ordering to be performed on. Multiple fields can be provided, separated by a comma.
     * @param limit The number of records to be returned.
     * @param offset The record number to start returning from.
     */
    public async listByWorkspace(params?: {
        workspaceId: string,
        sortOrder?: 'asc' | 'desc',
        sortFields?: string,
        limit?: number,
        offset?: number,
    }, options?: RequestOptions): Promise<{ lastResponse: http.IncomingMessage } & UserCollection> {
        const {
            workspaceId,
            sortOrder,
            sortFields,
            limit = 20,
            offset = 0,
        } = params || {};

        const localVarPath = this.host + '/workspaces/{workspaceId}/users'
            .replace('{' + 'workspaceId' + '}', encodeURIComponent(String(workspaceId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);

        let localVarFormParams: any = {};
        if (sortOrder !== undefined) {
            localVarQueryParameters['sortOrder'] = ObjectSerializer.serialize(sortOrder, "'asc' | 'desc'");
        }
        if (sortFields !== undefined) {
            localVarQueryParameters['sortFields'] = ObjectSerializer.serialize(sortFields, "string");
        }
        if (limit !== undefined) {
            localVarQueryParameters['limit'] = ObjectSerializer.serialize(limit, "number");
        }
        if (offset !== undefined) {
            localVarQueryParameters['offset'] = ObjectSerializer.serialize(offset, "number");
        }
        localVarHeaderParams['Accept'] = 'application/vnd.whispir.user-v1+json';
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
                            body = ObjectSerializer.deserialize(body, "UserCollection");
                            
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
     * Create a new user. Ensure that the necessary permissions are provided to the API account to create or modify user accounts.  ### Activating a User after the creation  When created new users are in the PENDING (P) state. To Activate the user, the User must be set to INACTIVE first via a PUT request and then finally set to ACTIVE (A) via another PUT. They cannot be directly set to (A) from (P).  An user when created is assigned the PENDING status. So, to set the user to ACTIVE, one has to follow the “user state machine” rules. Here’s how we do it: 1.  POST /users for user account creation. Capture the Location header value which is the unique link to the User record. This is used in Step 2 2.  GET /users/{userId} for the user object 3.  PUT /users/{userId} with STATUS set to \'INACTIVE’ - using the user object retreived in step 2 4.  PUT /users/{userId} with STATUS set to \'ACTIVE’ - using the user object retreived in step 2  **Note:** The status text is case sensitive. Lowercase or mixed case text is invalid. Always use uppercase.  Example: active != ACTIVE; inActive != INACTIVE
     * @summary Create a user
     * @param xApiKey The API key for authentication.
     * @param contentType Application specific mime-type.
     * @param accept User accept.
     * @param user The User object to create.
     */
    public async create(params?: {
    } & UserWrite, options?: RequestOptions): Promise<{ lastResponse: http.IncomingMessage, id: string } & User> {
        const {
            ...user
        } = params || {};

        const localVarPath = this.host + '/users';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);

        let localVarFormParams: any = {};
        localVarHeaderParams['Content-Type'] = 'application/vnd.whispir.user-v1+json';
        localVarHeaderParams['Accept'] = 'application/vnd.whispir.user-v1+json';
        (<any>Object).assign(localVarHeaderParams, options?.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this.useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(user, "User")
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
                            body = ObjectSerializer.deserialize(body, "User");
                            
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
     * The application must provide all the fields during the update request, even if they are not being updated.  **Any missing fields, except for the password field, will be automatically removed from the existing record.**  **Note:** You cannot selectively update the user fields needed as this is a PUT request.  So the standard process for updating a user record is:  1.  GET `/users/{id of user}` 2.  Update the user field in the object to the required value 3.  PUT `/users/{id of user}` the new object  The response to the PUT request upon success is usually a 204 with no content being provided. 
     * @summary Update a user
     * @param xApiKey The API key for authentication.
     * @param userId Enter Users id.
     * @param contentType Application specific mime-type.
     * @param accept User accept.
     * @param user Users object that needs to be update Users
     */
    public async update(params?: {
        userId: string,
    } & UserWrite, options?: RequestOptions): Promise<{ lastResponse: http.IncomingMessage }> {
        const {
            userId,
            ...user
        } = params || {};

        const localVarPath = this.host + '/users/{userId}'
            .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);

        let localVarFormParams: any = {};
        localVarHeaderParams['Content-Type'] = 'application/vnd.whispir.user-v1+json';
        localVarHeaderParams['Accept'] = 'application/vnd.whispir.user-v1+json';
        (<any>Object).assign(localVarHeaderParams, options?.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'PUT',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this.useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(user, "User")
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
