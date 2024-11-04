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
exports.ResourcesApi = void 0;
const request_1 = __importDefault(require("request"));
const models_1 = require("../model/models");
const apis_1 = require("./apis");
class ResourcesApi {
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
     * ### High-Level Response Elements  **name:** String   *   Specifies the name of the file being uploaded. The extension of the file too is allowed to be present in the name. **Eg:** australia-contacts.csv *   **Note:** It is advised that names should not contain spaces or special characters other than `-` and `.`. This helps for easier search and also for a valid URL link (especially) in case of public scoped files. *   **Eg:** `australia-contacts.csv` is better name convention than `australia contacts.csv` as the latter converts into `australia%20contacts.csv`.    **scope:** String   Specifies the permission scope of the file being uploaded. The scope defines the access restriction of the resource. It can be only one between:   *   **Public -** Public files have an addressable URL and are available publicly   *   **Private -** Private files have no URL and are only available for bulk messaging purposes and for importing contacts.  **mimeType:** String   The mime type of the file that is being uploaded. The type is dependent on the scope of the resource.   *   **Public -** Public files can be of any mimetype. `text/html`; `text/csv`   *   **Private -** Private files are restricted to `CSV`, `JSON`, and `XML`  **derefUri:** The base64 representation of the file being submitted.  **Note:** When creating a resource, the following conditions apply -  *   Maximum of 10MB per file being uploaded. *   Transactions will have an enforced timeout. *   Resources will be available in the Whispir Platform for a limited timeframe (30 days). These will then be automatically cleaned. This will be a configurable setting for Whispir Administrators.  ### Upload the Resource file via API   To upload a file to Whispir’s API, users will make an API call to the /resources endpoint.   Applications can use this endpoint to store the source files for dynamic messages. This endpoint can also be used to store any file based data (e.g. images, pdf documents, spreadsheets) for an unlimited amount of time.    **Note:** The types of files allowed are - `CSV`, `JSON`, `XML`, Images [`JPEG`, `PNG`], and `WAV`.    Information about the resources endpoint is documented in the Resources section of the documentation.
     * @summary Create a resource
     * @param workspaceId The identifier for the workspace.
     * @param xApiKey The API key for authentication.
     * @param contentType Application specific mime-type.
     * @param accept Application specific mime-type.
     * @param resource resources object that needs to be create resources
     */
    async create(params, options) {
        const _a = params || {}, { workspaceId } = _a, resource = __rest(_a, ["workspaceId"]);
        const localVarPath = this.host + '/workspaces/{workspaceId}/resources'
            .replace('{' + 'workspaceId' + '}', encodeURIComponent(String(workspaceId)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        localVarHeaderParams['Content-Type'] = 'application/vnd.whispir.resource-v1+json';
        localVarHeaderParams['Accept'] = 'application/vnd.whispir.resource-v1+json';
        Object.assign(localVarHeaderParams, options === null || options === void 0 ? void 0 : options.headers);
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this.useQuerystring,
            json: true,
            body: models_1.ObjectSerializer.serialize(resource, "Resource")
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
                            body = models_1.ObjectSerializer.deserialize(body, "Resource");
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
     * Resources can be deleted after use. These can be both public and private in scope.    **Note:** Deleting a public resource may result in 404 File Not Found error for any sites or material referencing to it. So, ensure that DELETE is only executed when the reference to all material is removed or the content has to be removed for other purposes immediately.
     * @summary Delete a resource
     * @param workspaceId The identifier for the workspace.
     * @param xApiKey The API key for authentication.
     * @param resourceId The id of the resources to be deleted
     */
    async delete(params, options) {
        const { workspaceId, resourceId, } = params || {};
        const localVarPath = this.host + '/workspaces/{workspaceId}/resources/{resourceId}'
            .replace('{' + 'workspaceId' + '}', encodeURIComponent(String(workspaceId)))
            .replace('{' + 'resourceId' + '}', encodeURIComponent(String(resourceId)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        Object.assign(localVarHeaderParams, options === null || options === void 0 ? void 0 : options.headers);
        let localVarUseFormData = false;
        let localVarRequestOptions = {
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
     * Existing resources can be easily retrieved via the GET /resources API call. The response lists all of the existing public and private resources available in the system.  **name:** String   - Specifies the name of the resource. The name is given during creation.  **scope:** String   - Specifies the permission scope of the file being uploaded.  **mimeType:** String   - The mime type of the file that is being uploaded.  **url:** String   - The downloaded link to the resource location. Browsing this link results in a download of the resource.   - **Note:** Only available for Public scoped resources.  **link:** Array   - Provides a list of URLs that can be used to manipulate or access the message template.   - uri - the link to access the message template   - rel - the descriptor for what the link will do   - method - the HTTP method to use with this particular link  ## Filtering search results  **Note:** when it comes to searching by name, the equal sign must be intended as `contains` rather than `equals`. So, if we search resources with the value equals to `in` we might be given back   **Eg** (`India.csv` and `Indonesia.json` but also `Argentina.csv`)  ### Filtering By scope  Resources can be filtered by their scope. This can be achieved by sending in the required scope type in the URL as query parameter. The scope can be one of the allowed scope types.  *   Public - &scope=public *   Private - &scope=private  ### Filtering By name  Resources can be filtered by their name. This can be achieved by sending in the name in the URL as query parameter.  **Note:** The name including the file extension makes it a unique search.  **Eg:** - &name=australia.csv
     * @summary List resources
     * @param workspaceId The identifier for the workspace.
     * @param xApiKey The API key for authentication.
     * @param accept Application specific mime-type.
     * @param limit The number of records to be returned.
     * @param offset The record number to start returning from.
     * @param sortOrder The order in which you require the results to be returned. Either ‘asc’ or ‘desc’
     * @param sortFields The fields that you require the ordering to be performed on. Multiple fields can be provided, separated by a comma.
     * @param scope A filter parameter for the visibility of the resource.
     * @param name A filter parameter for the name of the resource.
     */
    async list(params, options) {
        const { workspaceId, limit = 20, offset = 0, sortOrder, sortFields, scope, name, } = params || {};
        const localVarPath = this.host + '/workspaces/{workspaceId}/resources'
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
        if (scope !== undefined) {
            localVarQueryParameters['scope'] = models_1.ObjectSerializer.serialize(scope, "'private' | 'public'");
        }
        if (name !== undefined) {
            localVarQueryParameters['name'] = models_1.ObjectSerializer.serialize(name, "string");
        }
        localVarHeaderParams['Accept'] = 'application/vnd.whispir.resource-v1+json';
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
                            body = models_1.ObjectSerializer.deserialize(body, "ResourceCollection");
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
     * A single resource (public|private) can be retrieved from the available resource by using the resource’s specific link uri
     * @summary Retrieve a resource
     * @param workspaceId The identifier for the workspace.
     * @param xApiKey The API key for authentication.
     * @param accept Application specific mime-type.
     * @param resourceId The identifier for the resource.
     */
    async retrieve(params, options) {
        const { workspaceId, resourceId, } = params || {};
        const localVarPath = this.host + '/workspaces/{workspaceId}/resources/{resourceId}'
            .replace('{' + 'workspaceId' + '}', encodeURIComponent(String(workspaceId)))
            .replace('{' + 'resourceId' + '}', encodeURIComponent(String(resourceId)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        localVarHeaderParams['Accept'] = 'application/vnd.whispir.resource-v1+json';
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
                            body = models_1.ObjectSerializer.deserialize(body, "Resource");
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
     * Updating a resource involves the same process as in creating a resource. The process of using one of the format (CSV, JSON, XML) for private and any format for public -> converting to base64 encoded data is the same.   The change is doing a PUT to the existing resource URL that needs to be updated. Please be careful that doing an update overwrites the previous resource. There is no versioning available in Whispir for the resources.   Any or all of the 4 values can be changed. i.e, name, scope, mimeType, derefUri, but all 4 are mandatory values to be sent.
     * @summary Update a resource
     * @param workspaceId The identifier for the workspace.
     * @param xApiKey The API key for authentication.
     * @param contentType Application specific mime-type.
     * @param accept Application specific mime-type.
     * @param resourceId Enter resources id.
     * @param resource resources object that needs to be update resources
     */
    async update(params, options) {
        const _a = params || {}, { workspaceId, resourceId } = _a, resource = __rest(_a, ["workspaceId", "resourceId"]);
        const localVarPath = this.host + '/workspaces/{workspaceId}/resources/{resourceId}'
            .replace('{' + 'workspaceId' + '}', encodeURIComponent(String(workspaceId)))
            .replace('{' + 'resourceId' + '}', encodeURIComponent(String(resourceId)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        localVarHeaderParams['Content-Type'] = 'application/vnd.whispir.resource-v1+json';
        localVarHeaderParams['Accept'] = 'application/vnd.whispir.resource-v1+json';
        Object.assign(localVarHeaderParams, options === null || options === void 0 ? void 0 : options.headers);
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'PUT',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this.useQuerystring,
            json: true,
            body: models_1.ObjectSerializer.serialize(resource, "Resource")
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
                            body = models_1.ObjectSerializer.deserialize(body, "Resource");
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
exports.ResourcesApi = ResourcesApi;
