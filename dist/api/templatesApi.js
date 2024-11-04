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
exports.TemplatesApi = void 0;
const request_1 = __importDefault(require("request"));
const models_1 = require("../model/models");
const apis_1 = require("./apis");
class TemplatesApi {
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
     * Create a message template, combining multi-channel content for use with the Message resource. The message template can be reused across multiple sent messages.
     * @summary Create a template
     * @param workspaceId The identifier for the workspace.
     * @param xApiKey The API key for authentication.
     * @param contentType Application specific mime-type.
     * @param accept Application specific mime-type.
     * @param template Templates object that needs to be create Templates
     */
    async create(params, options) {
        const _a = params || {}, { workspaceId } = _a, template = __rest(_a, ["workspaceId"]);
        const localVarPath = this.host + '/workspaces/{workspaceId}/templates'
            .replace('{' + 'workspaceId' + '}', encodeURIComponent(String(workspaceId)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        localVarHeaderParams['Content-Type'] = 'application/vnd.whispir.template-v1+json';
        localVarHeaderParams['Accept'] = 'application/vnd.whispir.template-v1+json';
        Object.assign(localVarHeaderParams, options === null || options === void 0 ? void 0 : options.headers);
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this.useQuerystring,
            json: true,
            body: models_1.ObjectSerializer.serialize(template, "Template")
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
                            body = models_1.ObjectSerializer.deserialize(body, "Template");
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
     * **Note:** When a template is DELETED, all the associated Scenarios, events, and references of template use in other endpoints will fail. So, ensure that the template is not used anywhere before it is deleted. Whispir **will not** do that check before it deletes the template.
     * @summary Delete a template
     * @param workspaceId The identifier for the workspace.
     * @param xApiKey The API key for authentication.
     * @param contentType Application specific mime-type.
     * @param accept Application specific mime-type.
     * @param templateId The identifier for the template.
     */
    async delete(params, options) {
        const { workspaceId, templateId, } = params || {};
        const localVarPath = this.host + '/workspaces/{workspaceId}/templates/{templateId}'
            .replace('{' + 'workspaceId' + '}', encodeURIComponent(String(workspaceId)))
            .replace('{' + 'templateId' + '}', encodeURIComponent(String(templateId)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        localVarHeaderParams['Content-Type'] = 'application/vnd.whispir.template-v1+json';
        localVarHeaderParams['Accept'] = 'application/vnd.whispir.template-v1+json';
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
     * List all message templates for the workspace.  Pagination is available.
     * @summary List templates
     * @param workspaceId The identifier for the workspace.
     * @param xApiKey The API key for authentication.
     * @param accept Application specific mime-type.
     * @param limit The number of records to be returned.
     * @param offset The record number to start returning from.
     * @param sortOrder The order in which you require the results to be returned. Either ‘asc’ or ‘desc’
     * @param sortFields The fields that you require the ordering to be performed on. Multiple fields can be provided, separated by a comma.
     */
    async list(params, options) {
        const { workspaceId, limit = 20, offset = 0, sortOrder, sortFields, } = params || {};
        const localVarPath = this.host + '/workspaces/{workspaceId}/templates'
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
        localVarHeaderParams['Accept'] = 'application/vnd.whispir.template-v1+json';
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
                            body = models_1.ObjectSerializer.deserialize(body, "TemplateCollection");
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
     * Retrieves a message template
     * @summary Retrieve a template
     * @param workspaceId The identifier for the workspace.
     * @param xApiKey The API key for authentication.
     * @param accept Application specific mime-type.
     * @param templateId The identifier for the template.
     */
    async retrieve(params, options) {
        const { workspaceId, templateId, } = params || {};
        const localVarPath = this.host + '/workspaces/{workspaceId}/templates/{templateId}'
            .replace('{' + 'workspaceId' + '}', encodeURIComponent(String(workspaceId)))
            .replace('{' + 'templateId' + '}', encodeURIComponent(String(templateId)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        localVarHeaderParams['Accept'] = 'application/vnd.whispir.template-v1+json';
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
                            body = models_1.ObjectSerializer.deserialize(body, "Template");
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
     * **Note:** Currently users cannot update templates with the same name as a template that already exists in Whispir. Users can overcome this by saving the updated template with a new name, then either changing this back in a subsequent save, or retaining the updated name.
     * @summary Update a template
     * @param workspaceId The identifier for the workspace.
     * @param xApiKey The API key for authentication.
     * @param contentType Application specific mime-type.
     * @param accept Application specific mime-type.
     * @param templateId The identifier for the template.
     * @param template Templates object that needs to be update Templates
     */
    async update(params, options) {
        const _a = params || {}, { workspaceId, templateId } = _a, template = __rest(_a, ["workspaceId", "templateId"]);
        const localVarPath = this.host + '/workspaces/{workspaceId}/templates/{templateId}'
            .replace('{' + 'workspaceId' + '}', encodeURIComponent(String(workspaceId)))
            .replace('{' + 'templateId' + '}', encodeURIComponent(String(templateId)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        localVarHeaderParams['Content-Type'] = 'application/vnd.whispir.template-v1+json';
        localVarHeaderParams['Accept'] = 'application/vnd.whispir.template-v1+json';
        Object.assign(localVarHeaderParams, options === null || options === void 0 ? void 0 : options.headers);
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'PUT',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this.useQuerystring,
            json: true,
            body: models_1.ObjectSerializer.serialize(template, "Template")
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
exports.TemplatesApi = TemplatesApi;
