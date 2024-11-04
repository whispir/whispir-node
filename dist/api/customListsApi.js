"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomListsApi = void 0;
const request_1 = __importDefault(require("request"));
const models_1 = require("../model/models");
const apis_1 = require("./apis");
class CustomListsApi {
    constructor(config) {
        this.defaultHeaders = {};
        this.useQuerystring = false;
        this.interceptors = [];
        this.defaultHeaders = config.defaultHeaders;
        this.host = config.host;
    }
    addInterceptor(interceptor) {
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
    async list(params, options) {
        const { limit = 20, offset = 0, sortOrder, sortFields, name, type, } = params || {};
        const localVarPath = this.host + '/customlists';
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (limit !== undefined) {
            localVarQueryParameters['limit'] = models_1.ObjectSerializer.serialize(limit, "number");
        }
        if (offset !== undefined) {
            localVarQueryParameters['offset'] = models_1.ObjectSerializer.serialize(offset, "number");
        }
        if (sortOrder !== undefined) {
            localVarQueryParameters['sortOrder'] = models_1.ObjectSerializer.serialize(sortOrder, "'asc' | 'desc'");
        }
        if (sortFields !== undefined) {
            localVarQueryParameters['sortFields'] = models_1.ObjectSerializer.serialize(sortFields, "string");
        }
        if (name !== undefined) {
            localVarQueryParameters['name'] = models_1.ObjectSerializer.serialize(name, "string");
        }
        if (type !== undefined) {
            localVarQueryParameters['type'] = models_1.ObjectSerializer.serialize(type, "'INCIDENT' | 'MESSAGE' | 'CONTACT' | 'RSS'");
        }
        localVarHeaderParams['Accept'] = 'application/vnd.whispir.customlist-v1+json';
        Object.assign(localVarHeaderParams, options === null || options === void 0 ? void 0 : options.headers);
        let localVarUseFormData = false;
        let localVarRequestOptions = {
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
                    localVarRequestOptions.formData = localVarFormParams;
                }
                else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise((resolve, reject) => {
                (0, request_1.default)(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    }
                    else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = models_1.ObjectSerializer.deserialize(body, "CustomListCollection");
                            resolve(Object.assign({ lastResponse: response.toJSON() }, body));
                        }
                        else {
                            reject(new apis_1.HttpError(body));
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
    async retrieve(params, options) {
        const { customlistId, } = params || {};
        const localVarPath = this.host + '/customlists/{customlistId}'
            .replace('{' + 'customlistId' + '}', encodeURIComponent(String(customlistId)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        localVarHeaderParams['Accept'] = 'application/vnd.whispir.customlist-v1+json';
        Object.assign(localVarHeaderParams, options === null || options === void 0 ? void 0 : options.headers);
        let localVarUseFormData = false;
        let localVarRequestOptions = {
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
                    localVarRequestOptions.formData = localVarFormParams;
                }
                else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise((resolve, reject) => {
                (0, request_1.default)(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    }
                    else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = models_1.ObjectSerializer.deserialize(body, "CustomList");
                            resolve(Object.assign({ lastResponse: response.toJSON() }, body));
                        }
                        else {
                            reject(new apis_1.HttpError(body));
                        }
                    }
                });
            });
        });
    }
}
exports.CustomListsApi = CustomListsApi;
