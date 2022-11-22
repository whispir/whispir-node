import localVarRequest from 'request';
import http from 'http';

/* tslint:disable:no-unused-locals */
import { CustomList, CustomListWrite } from '../model/customList';
import { GetCustomLists200Response, GetCustomLists200ResponseWrite } from '../model/getCustomLists200Response';
import { GetMessages400Response, GetMessages400ResponseWrite } from '../model/getMessages400Response';
import { GetMessages401Response, GetMessages401ResponseWrite } from '../model/getMessages401Response';
import { GetMessages403Response, GetMessages403ResponseWrite } from '../model/getMessages403Response';
import { GetMessages404Response, GetMessages404ResponseWrite } from '../model/getMessages404Response';
import { GetMessages405Response, GetMessages405ResponseWrite } from '../model/getMessages405Response';
import { GetMessages415Response, GetMessages415ResponseWrite } from '../model/getMessages415Response';
import { GetMessages422Response, GetMessages422ResponseWrite } from '../model/getMessages422Response';
import { GetMessages500Response, GetMessages500ResponseWrite } from '../model/getMessages500Response';
import { GetMessages501Response, GetMessages501ResponseWrite } from '../model/getMessages501Response';
import { ObjectSerializer, Interceptor } from '../model/models';
import { HttpError, RequestFile, ApiConfig, RequestOptions } from './apis';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export class CustomListsApi {
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
     * ### High-Level Response Elements **id:** Number   Specifies the unique id of the List.  **name:** String   Specifies the name of the List.  **type:** String   Specifies the type. The type can be one of: *   INCIDENT *   MESSAGE *   CONTACT *   RSS  **sorttype:** String   Specifies the sorting order. The order can be one of: *   As Displayed *   Ascending *   Descending  **linked:** String   Specifies the linked status. Linked list item values are dependent on other lists. The linked can be one of: *   disabled *   list id to which this is linked with  **link:** Array   Provides a list of URLs that can be used to manipulate or access the list.  *   uri - the link to access the list *   rel - the descriptor for what the link will do *   method - the HTTP method to use with this particular link  ### Search or Filter on Custom Lists  API allows you to be able to query the GET /customlists endpoint using the following filters.  **Search Criteria** - **name:** `/customlists?name=Category`  - **type:** `/customlists?type=Message`  *** **Note:** The API currently results in a 404 Not Found when there are no activities present in the log for a given search criteria. This should not be not confused with a failed response. But rather as No Data Found. 
     * @summary List custom lists
     * @param xApiKey The API key for authentication.
     * @param accept Application specific mime-type.
     * @param limit The number of records to be returned.
     * @param offset The record number to start returning from.
     * @param sortOrder The order in which you require the results to be returned. Either ‘asc’ or ‘desc’
     * @param sortFields The fields that you require the ordering to be performed on. Multiple fields can be provided, separated by a comma.
     * @param name Enter search name Eg.Category
     * @param type Enter search type Eg.Message
     */
    public async list(params?: {
        limit?: number,
        offset?: number,
        sortOrder?: 'asc' | 'desc',
        sortFields?: string,
        name?: string,
        type?: 'INCIDENT' | 'MESSAGE' | 'CONTACT' | 'RSS',
    }, options?: RequestOptions): Promise<{ lastResponse: http.IncomingMessage } & GetCustomLists200Response> {
        const {
            limit = 20,
            offset = 0,
            sortOrder,
            sortFields,
            name,
            type,
        } = params || {};

        const localVarPath = this.host + '/customlists';
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
        if (name !== undefined) {
            localVarQueryParameters['name'] = ObjectSerializer.serialize(name, "string");
        }
        if (type !== undefined) {
            localVarQueryParameters['type'] = ObjectSerializer.serialize(type, "'INCIDENT' | 'MESSAGE' | 'CONTACT' | 'RSS'");
        }
        localVarHeaderParams['Accept'] = 'application/vnd.whispir.customlist-v1+json';
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
                            body = ObjectSerializer.deserialize(body, "GetCustomLists200Response");
                            
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
     * ### High-Level Response Elements  **id:** Number   Specifies the unique id of the List.  **name:** String   Specifies the name of the List.  **type:** String   Specifies the type. The type can be one of: *   INCIDENT *   MESSAGE *   CONTACT *   RSS  **createdDate:** String   Specifies the date of the List creation.  **sorttype:** String   Specifies the sorting order. The order can be one of: *   As Displayed *   Ascending *   Descending  **linked:** String   Specifies the linked status. Linked list item values are dependent on other lists. The linked can be one of: *   disabled *   list id to which this is linked with  **customlabellists:** Object   The `name` is the text that is shown to the user, where as the `value` is the internally passed in value.  **link:** Array   Provides a list of URLs that can be used to manipulate or access the list. *   uri - the link to access the list *   rel - the descriptor for what the link will do *   method - the HTTP method to use with this particular link 
     * @summary Retrieve a custom list
     * @param xApiKey The API key for authentication.
     * @param accept Application specific mime-type.
     * @param customlistId Enter Id
     */
    public async retrieve(params?: {
        customlistId: string,
    }, options?: RequestOptions): Promise<{ lastResponse: http.IncomingMessage } & CustomList> {
        const {
            customlistId,
        } = params || {};

        const localVarPath = this.host + '/customlists/{customlistId}'
            .replace('{' + 'customlistId' + '}', encodeURIComponent(String(customlistId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);

        let localVarFormParams: any = {};
        localVarHeaderParams['Accept'] = 'application/vnd.whispir.customlist-v1+json';
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
                            body = ObjectSerializer.deserialize(body, "CustomList");
                            
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
