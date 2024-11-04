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
exports.ContactsApi = void 0;
const request_1 = __importDefault(require("request"));
const models_1 = require("../model/models");
const apis_1 = require("./apis");
class ContactsApi {
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
     * Creates a Contact object. The Contact can be used as a recipient when sending multi-channel messages.
     * @summary Create a contact
     * @param workspaceId The identifier for the workspace.
     * @param xApiKey The API key for authentication.
     * @param accept Application specific mime-type.
     * @param contentType Application specific mime-type.
     * @param contact Contact object to be created
     */
    async create(params, options) {
        const _a = params || {}, { workspaceId } = _a, contact = __rest(_a, ["workspaceId"]);
        const localVarPath = this.host + '/workspaces/{workspaceId}/contacts'
            .replace('{' + 'workspaceId' + '}', encodeURIComponent(String(workspaceId)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        localVarHeaderParams['Accept'] = 'application/vnd.whispir.contact-v1+json';
        localVarHeaderParams['Content-Type'] = 'application/vnd.whispir.contact-v1+json';
        Object.assign(localVarHeaderParams, options === null || options === void 0 ? void 0 : options.headers);
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this.useQuerystring,
            json: true,
            body: models_1.ObjectSerializer.serialize(contact, "Contact")
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
                            body = models_1.ObjectSerializer.deserialize(body, "Contact");
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
     * After performing this request, the response does not contain any information other than the headers as it is not necessary.  The user has requested to delete a contact, and when the response of 204 No Content is returned, the contact is successfully deleted.
     * @summary Delete a contact
     * @param workspaceId The identifier for the workspace.
     * @param xApiKey The API key for authentication.
     * @param contactId The id of the contact to be deleted
     * @param action The API call involves passing an &#x60;action&#x3D;deleteAll&#x60; query parameter. Once this action is triggered, all the contact references in all workspaces for a given &#x60;contact_id&#x60; are deleted asynchronously. There is no way to stop the process once it’s triggered. **Use the action only when you’re definitely sure you want to delete the contact from all workspaces**
     */
    async delete(params, options) {
        const { workspaceId, contactId, action, } = params || {};
        const localVarPath = this.host + '/workspaces/{workspaceId}/contacts/{contactId}'
            .replace('{' + 'workspaceId' + '}', encodeURIComponent(String(workspaceId)))
            .replace('{' + 'contactId' + '}', encodeURIComponent(String(contactId)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (action !== undefined) {
            localVarQueryParameters['action'] = models_1.ObjectSerializer.serialize(action, "'deleteAll'");
        }
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
     * **Note:** There is no global search feature available where one can search on all the workspaces present in the system (under allowed user permission). So, When no workspace is provided, the search is performed on the default workspace of the user.  ### Searching for contacts with Custom Fields  As Whispir supports extension of the default Contact Profile through the use of Custom Fields. There may be cases where users want to search for Contacts that contain these specific fields. As such, the Whispir API supports searching for contacts using these custom fields.  Any custom field can be searched by adding the custom_ prepended to the name.  For example, if the field name is **StaffId**, then the URL would search for:  `/contacts?custom_StaffId=12345`
     * @summary List contacts
     * @param workspaceId The identifier for the workspace.
     * @param xApiKey The API key for authentication.
     * @param accept Application specific mime-type.
     * @param limit The number of records to be returned.
     * @param offset The record number to start returning from.
     * @param sortOrder The order in which you require the results to be returned. Either ‘asc’ or ‘desc’
     * @param sortFields The fields that you require the ordering to be performed on. Multiple fields can be provided, separated by a comma.
     * @param fieldname String Specifies the field name of the contact object. The field name could be any thing as long as it is a valid contact attribute.   Example: &#x60;http://api.whispir.com/contacts?firstName&#x3D;Sam&#x60;
     * @param customFields Custom Fields
     */
    async list(params, options) {
        const { workspaceId, limit = 20, offset = 0, sortOrder, sortFields, queryFields, customFields, } = params || {};
        const localVarPath = this.host + '/workspaces/{workspaceId}/contacts'
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
        if (queryFields !== undefined) {
            for (const prop in queryFields) {
                localVarQueryParameters[prop] = models_1.ObjectSerializer.serialize(queryFields[prop], "string");
            }
        }
        if (customFields !== undefined) {
            localVarQueryParameters['customFields'] = models_1.ObjectSerializer.serialize(customFields, "boolean");
        }
        localVarHeaderParams['Accept'] = 'application/vnd.whispir.contact-v1+json';
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
                            body = models_1.ObjectSerializer.deserialize(body, "ContactCollection");
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
     * ### Showing Custom Fields  Whispir supports extension of the default Contact Profile through the use of Custom Fields. Custom fields can support other fields that may be required to be stored on your Contacts, such as Staff ID, Internal Billing Codes, or One Up Manager.  These custom fields can be configured on any account through a Change Request to Whispir.  In order to reveal these custom fields on the contact profile, you can use the `customFields=true` flag within your API request.  Example: `/contacts/AB38CB3EFD38AFDB?customFields=true`
     * @summary Retrieve a contact
     * @param workspaceId The identifier for the workspace.
     * @param xApiKey The API key for authentication.
     * @param contactId Enter contact id.
     * @param accept Application specific mime-type.
     * @param fields NOTE: once again, the equal sign must be intended as \&quot;contains\&quot; rather than \&quot;equals\&quot;. So if we search the people whose firstName equals Sam we might be given back e.g. Sam, Samantha, Samuel. Similarly for numbers: if we search Contacts with staffId equal to 1234 we will given back e.g. the contact with staffID equal to 1234 but also e.g. a contact with staffID equal to 98123456. If you need to narrow down please consider applying additional filters
     * @param sortOrder The order in which you require the results to be returned. Either ‘asc’ or ‘desc’
     * @param sortFields The fields that you require the ordering to be performed on. Multiple fields can be provided, separated by a comma.
     */
    async retrieve(params, options) {
        const { workspaceId, contactId, fields, sortOrder, sortFields, } = params || {};
        const localVarPath = this.host + '/workspaces/{workspaceId}/contacts/{contactId}'
            .replace('{' + 'workspaceId' + '}', encodeURIComponent(String(workspaceId)))
            .replace('{' + 'contactId' + '}', encodeURIComponent(String(contactId)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        if (fields !== undefined) {
            localVarQueryParameters['fields'] = models_1.ObjectSerializer.serialize(fields, "string");
        }
        if (sortOrder !== undefined) {
            localVarQueryParameters['sortOrder'] = models_1.ObjectSerializer.serialize(sortOrder, "'asc' | 'desc'");
        }
        if (sortFields !== undefined) {
            localVarQueryParameters['sortFields'] = models_1.ObjectSerializer.serialize(sortFields, "string");
        }
        localVarHeaderParams['Accept'] = 'application/vnd.whispir.contact-v1+json';
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
                            body = models_1.ObjectSerializer.deserialize(body, "Contact");
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
     * The application must provide all the fields during the update request, even if they are not being updated.  ## **NOTE:** Any missing fields will be automatically removed from the existing record.  **Note:** You cannot selectively update the contact fields needed as this is a PUT request.  1.  GET `/contact/{id of contact}` 2.  Update the contact field in the object to the required value 3.  PUT `/contact/{id of contact}` the new object  The response to the PUT request upon success is usually a 204 with no content being provided.
     * @summary Update a contact
     * @param workspaceId The identifier for the workspace.
     * @param xApiKey The API key for authentication.
     * @param contactId Enter contact id.
     * @param accept Application specific mime-type.
     * @param contentType Application specific mime-type.
     * @param contact contact object that needs to be update contact
     */
    async update(params, options) {
        const _a = params || {}, { workspaceId, contactId } = _a, contact = __rest(_a, ["workspaceId", "contactId"]);
        const localVarPath = this.host + '/workspaces/{workspaceId}/contacts/{contactId}'
            .replace('{' + 'workspaceId' + '}', encodeURIComponent(String(workspaceId)))
            .replace('{' + 'contactId' + '}', encodeURIComponent(String(contactId)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        localVarHeaderParams['Accept'] = 'application/vnd.whispir.contact-v1+json';
        localVarHeaderParams['Content-Type'] = 'application/vnd.whispir.contact-v1+json';
        Object.assign(localVarHeaderParams, options === null || options === void 0 ? void 0 : options.headers);
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'PUT',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this.useQuerystring,
            json: true,
            body: models_1.ObjectSerializer.serialize(contact, "Contact")
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
exports.ContactsApi = ContactsApi;
