"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DistributionListsApi = void 0;
const request_1 = __importDefault(require("request"));
const models_1 = require("../model/models");
const apis_1 = require("./apis");
class DistributionListsApi {
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
     * Distribution lists can be created within the Default Workspace, or within a Specific Workspace. More information on Workspaces will be provided later in this documentation.  The MRI value is important here. It is the required unique identifier for any communications that are to be sent out to this distribution list.
     * @summary Create a distribution list
     * @param workspaceId The identifier for the workspace.
     * @param xApiKey The API key for authentication.
     * @param contentType Application specific mime-type.
     * @param accept Application specific mime-type.
     * @param distributionList Distribution list object that needs to be create Distribution list
     */
    async create(params, options) {
        const _a = params || {}, { workspaceId } = _a, distributionList = __rest(_a, ["workspaceId"]);
        const localVarPath = this.host + '/workspaces/{workspaceId}/distributionlists'
            .replace('{' + 'workspaceId' + '}', encodeURIComponent(String(workspaceId)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        localVarHeaderParams['Content-Type'] = 'application/vnd.whispir.distributionlist-v1+json';
        localVarHeaderParams['Accept'] = 'application/vnd.whispir.distributionlist-v1+json';
        Object.assign(localVarHeaderParams, options === null || options === void 0 ? void 0 : options.headers);
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this.useQuerystring,
            json: true,
            body: models_1.ObjectSerializer.serialize(distributionList, "DistributionList")
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
                    var _a, _b;
                    if (error) {
                        reject(error);
                    }
                    else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = models_1.ObjectSerializer.deserialize(body, "DistributionList");
                            // Special case to extract the resource identifier from the `Location` header.
                            const checkLocation = (_b = (_a = response === null || response === void 0 ? void 0 : response.headers) === null || _a === void 0 ? void 0 : _a.location) === null || _b === void 0 ? void 0 : _b.match(/\/([^\/]+)\/?$/);
                            let id = (checkLocation && checkLocation[1]) ? checkLocation[1] : undefined;
                            resolve(Object.assign({ lastResponse: response.toJSON(), id }, body));
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
     * You can only delete the distribution list that you have created or a valid userId associated with the specific distribution list.
     * @summary Delete a distribution list
     * @param workspaceId The identifier for the workspace.
     * @param xApiKey The API key for authentication.
     * @param distributionlistId The id of the distributionlists to be deleted
     */
    async delete(params, options) {
        const { workspaceId, distributionlistId, } = params || {};
        const localVarPath = this.host + '/workspaces/{workspaceId}/distributionlists/{distributionlistId}'
            .replace('{' + 'workspaceId' + '}', encodeURIComponent(String(workspaceId)))
            .replace('{' + 'distributionlistId' + '}', encodeURIComponent(String(distributionlistId)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        Object.assign(localVarHeaderParams, options === null || options === void 0 ? void 0 : options.headers);
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'DELETE',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath
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
    async list(params, options) {
        const { workspaceId, limit = 20, offset = 0, sortOrder, sortFields, name, description, } = params || {};
        const localVarPath = this.host + '/workspaces/{workspaceId}/distributionlists'
            .replace('{' + 'workspaceId' + '}', encodeURIComponent(String(workspaceId)));
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
        if (description !== undefined) {
            localVarQueryParameters['description'] = models_1.ObjectSerializer.serialize(description, "string");
        }
        localVarHeaderParams['Accept'] = 'application/vnd.whispir.distributionlist-v1+json';
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
                            body = models_1.ObjectSerializer.deserialize(body, "DistributionListCollection");
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
     * A distribution list allows you to associate the following:  *   **ContactIds** (type:String) is a comma separated list of Contact IDs that you would like added to the list. *   **UserIds** (type:String) specifies the Whispir Users that should also be notified when this list is used. *   **DistListIds** (type:String) specifies the nested lists that are contained within this distribution list.  Any or all three of these can be updated via the PUT method along with the DL properties (name, description, location etc).  The steps usually are:  1. Create a Distribution List (DL) 2. While creating the DL itself, you can put in the ContactIds, UserIds, distListIds (nested) so that the DL is created with those values readily placed in. 3. After the DL is created, if you want to add/update the values, then 4. Do a GET request to retrieve the specific DL.    -  This will return you the DL object 5. Modify the DL properties (name, description, contactIds, UserIds, dlIds, location etc) as needed 6. Do a PUT request to update the DL details    -  Successful update gives you a 204 No Content    -  The contactIds, userIds, distListIds can be passed all together in a single request.  Note: 1.  If an existing contactId is again added, it does neither throws an error, nor create two entries. The contactId is just neglected and only 1 record is maintained. 2.  If the PUT request was successful, the expected response code is a 204 No Content 3.  For Modifying the Location Information refer to Location Tags for Distribution Lists
     * @summary Retrieve a distribution list
     * @param workspaceId The identifier for the workspace.
     * @param xApiKey The API key for authentication.
     * @param accept Application specific mime-type.
     * @param distributionlistId Enter Distribution id.
     */
    async retrieve(params, options) {
        const { workspaceId, distributionlistId, } = params || {};
        const localVarPath = this.host + '/workspaces/{workspaceId}/distributionlists/{distributionlistId}'
            .replace('{' + 'workspaceId' + '}', encodeURIComponent(String(workspaceId)))
            .replace('{' + 'distributionlistId' + '}', encodeURIComponent(String(distributionlistId)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        localVarHeaderParams['Accept'] = 'application/vnd.whispir.distributionlist-v1+json';
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
                            body = models_1.ObjectSerializer.deserialize(body, "DistributionList");
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
     * Any or all three of these can be updated via the PUT method along with the DL properties (name, description, location etc).  The steps usually are: 1.  Create a Distribution List (DL) 2.  While creating the DL itself, you can put in the ContactIds, UserIds, distListIds (nested) so that the DL is created with those values readily placed in. 3.  After the DL is created, if you want to add/update the values, then 4.  Do a GET request to retrieve the specific DL.     - This will return you the DL object 5.  Modify the DL properties (name, description, contactIds, UserIds, dlIds, location etc) as needed 6.  Do a PUT request to update the DL details     - Successful update gives you a 204 No Content     - The contactIds, userIds, distListIds can be passed all together in a single request.  Note: - If an existing contactId is again added, it does neither throws an error, nor create two entries. The contactId is just neglected and only 1 record is maintained. - If the PUT request was successful, the expected response code is a 204 No Content - For Modifying the Location Information refer to Location Tags for Distribution Lists
     * @summary Update a distribution list
     * @param workspaceId The identifier for the workspace.
     * @param xApiKey The API key for authentication.
     * @param contentType Application specific mime-type.
     * @param accept Application specific mime-type.
     * @param distributionlistId Enter Distribution id.
     * @param distributionList Distribution list object that needs to be update Distribution list
     */
    async update(params, options) {
        const _a = params || {}, { workspaceId, distributionlistId } = _a, distributionList = __rest(_a, ["workspaceId", "distributionlistId"]);
        const localVarPath = this.host + '/workspaces/{workspaceId}/distributionlists/{distributionlistId}'
            .replace('{' + 'workspaceId' + '}', encodeURIComponent(String(workspaceId)))
            .replace('{' + 'distributionlistId' + '}', encodeURIComponent(String(distributionlistId)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        localVarHeaderParams['Content-Type'] = 'application/vnd.whispir.distributionlist-v1+json';
        localVarHeaderParams['Accept'] = 'application/vnd.whispir.distributionlist-v1+json';
        Object.assign(localVarHeaderParams, options === null || options === void 0 ? void 0 : options.headers);
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'PUT',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this.useQuerystring,
            json: true,
            body: models_1.ObjectSerializer.serialize(distributionList, "DistributionList")
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
exports.DistributionListsApi = DistributionListsApi;
