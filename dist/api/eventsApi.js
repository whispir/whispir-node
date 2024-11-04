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
exports.EventsApi = void 0;
const request_1 = __importDefault(require("request"));
const models_1 = require("../model/models");
const apis_1 = require("./apis");
class EventsApi {
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
     * The bulk of the `Event` metadata is from fields that are generic, and only applicable to the customer that is using the module.  The owner or responsible person for the event could be a `/contacts` in the system. This ensures that proper communication is sent to the individual based on their preferred channel (`message`, `email`, `voice`) automatically without having to key in the phone, email, and other communication information again.  Most importantly, to create an event, one must have the create access for `Incident` row in the `Roles & Permission` section of the account settings.  When an `Event` occurs/is triggered, the related actions are to be performed. Each action has an owner (`actionOwner`), a set time (`actionDate`), and details associated with it (`actionDetails`).   `Events` have sub sections under them called as ‘actions’ (maximum of 10). So the action values are numbered: <li> actionDate1, actionOwner1, actionDetails1 </li> <li> actionDate2, actionOwner2, actionDetails2 </li> <li> … </li> <li> actionDate10, actionOwner10, actionDetails10 </li>  <!-- theme: warning --> > #### Things to note > The fields described below are defined through `name/value` pairs and to be added as part of `eventFieldList` array  ```generic_attributes json_schema {   \"title\": \"Event Fields\",   \"type\": \"object\",   \"properties\": {     \"actionDate\": {       \"type\": \"string\"       \"description: \"The start date of this action in dd/mm/yyyy HH:MI:SS 24 hour format\",       \"example\": \"11/09/2019 17:41:00\"     },     \"actionOwner\": {       \"type\": \"string\",       \"description\": \"The individual (contact) responsible for this action’s execution\",       \"example\": \"John Wick\",     },     \"actionDetails\": {       \"type\": \"string\",       \"description\": \"The detail description of this action\",       \"example\":\"investigation to take place asap.\"     },     \"summary\": {       \"type\": \"string\",       \"description\": \"Specifies the summary of the event. A single line that can be the equivalent of the subject of an email\",       \"example\":\"investigation to take place asap\"     },     \"status\": {       \"type\": \"string\",       \"description\": \"Specifies the status of the event. The status can be one of the following\",       \"enum\": [\"Active\", \"Resolved\", \"Open\"],       \"default\":\"Open\",       \"example\":\"Open\"     },        \"description\": {       \"type\": \"string\",       \"description\": \"Specifies the detailed description of the event\",       \"example\":\"investigation to take place asap\"     },    \"location\": {       \"type\": \"string\",       \"description\": \"Specifies the latitude and longitude values of the event location. This helps to show the event location on Whispir’s geo-map feature set and coordinated communication based on the geo-location of the event\",       \"example\":\"0.0,0.0\"     },    \"startDate\": {       \"type\": \"string\",       \"description\": \"Specifies the start date of the event. The date and time should be in the format `DD/MM/YYYY HH:MI:SS` (24 hour format)\",       \"example\":\"23/09/2019 17:21:00\"     },    \"endDate\": {       \"type\": \"string\",       \"description\": \"Specifies the end date of the event. The date and time should be in the format `DD/MM/YYYY HH:MI:SS` (24 hour format)\",       \"example\":\"23/09/2019 17:21:00\"     },     \"severity\" :{       \"type\": \"string\",       \"description\": \"Specifies the severity of the event. While this can change from company to company, the standard value set to be chosen from is            <li><b>Severity 5</b> – Routine Maintenance Tasks</li>          <li><b>Severity 4</b> – Scheduled System Changes</li>          <li><b>Severity SL3</b> – Minor Outage (some service degradation)</li>          <li><b>Severity SL2</b> – Moderate Outage (service degradation)</li>          <li><b>Severity SL1</b> – Major Outage (significant service unavailability)</li>       \",       \"example\": \"Severity 5\"     },     \"priority\" :{       \"type\": \"string\",       \"description\": \"Specifies the priority of the event. While this can change from company to company, the standard value set to choose from is         <li><b>Priority 5</b> – No Set Resolution Period</li>         <li><b>Priority 4</b> – < 1 week Resolution</li>         <li><b>Priority 3</b> – < 3 day Resolution</li>         <li><b>Priority 2</b> – < 1 day Resolution</li>         <li><b>Priority 1</b> – < 2 hour Resolution</li>       \",       \"enum\": [\"Priority 5\", \"Priority 4\", \"Priority 3\", \"Priority 2\", \"Priority 1\"],       \"example\": \"Severity 5\"     },    \"duration\": {       \"type\": \"string\",       \"description\": \"The duration of the event in `HH:MI:SS`. For example, `02:05:00`. This can be substituted in the place of end date if required. Or a subset of the time between the start and end dates.\",       \"example\":\"02:05:00\"     }        },   required: [\"actionDate\", \"actionOwner\", \"actionDetails\", \"startDate\"] } ``` ``` categorisation json_schema {   \"title\": \"Event Fields\",   \"type\": \"object\",   \"description: \"\",   \"properties\": {     \"category\" :{       \"type\": \"string\",       \"description\": \"Specifies the category of event. The default values to choose from are (`Internal Systems`, `External Systems`, `Infrastructure`)\",       \"example\": \"Internal Systems\"     },     \"subcategory\" :{       \"type\": \"string\",       \"description\": \"Specifies the subcategory in the category. The default values to choose from are (`Customer Impact`, `Cust & Staff Impact`,`Staff Impact`, `Impact Unknown`)\",       \"example\": \"Customer Impact\"     },     \"type\" :{       \"type\": \"string\",       \"description\": \"Specifies the type of event. The default values to choose from are (`Multiple Issues`, `NIL`,`Network`, `Applications`, `Mobile Apps`)\",       \"example\": \"Customer Impact\"     },     \"externalVendor\" :{       \"type\": \"string\",       \"description\": \"Specifies the name/contact who is the external vendor related to this event\",       \"example\": \"ABC\"     },      \"lineNumber\" :{       \"type\": \"string\",       \"description\": \"Specifies the line number (production lines)\",       \"example\": \"ABC\"     },     \"externalCaseNumber\" :{       \"type\": \"string\",       \"description\": \"Specifies the number as tracked by an external party related to this event\",       \"example\": \"ABC\"     },   } } ``` ``` affected_services json_schema {   \"title\": \"Event Fields\",   \"type\": \"object\",   \"description: \"\",   \"properties\": {     \"platform\" :{       \"type\": \"string\",       \"description\": \"Specifies the platform in the company that this event is associated with\",       \"example\": \"ABC\"     },     \"services\" :{       \"type\": \"string\",       \"description\": \"Specifies the service in the company that this event is associated with\",       \"example\": \"ABC\"     },   } } ``` ``` impact json_schema {   \"title\": \"Event Fields\",   \"type\": \"object\",   \"description: \"\",   \"properties\": {     \"impactCondition\" :{       \"type\": \"string\",       \"description\": \"Specifies the impact condition of this event to the company. These values can be configured via custom lists as these can be very specific to the company. The default values to choose from are (`All services not available`, `All services degraded`, `Some services not available`, `Some services degraded`, `No Impact`, `Unknown`)\",       \"example\": \"Unknown\"     },     \"impactToOrg\" :{       \"type\": \"string\",       \"description\": \"Specifies the impact condition of this event to the company. These values can be configured via custom lists as these can be very specific to the company. The default values to choose from are (`All services not available`, `All services degraded`, `Some services not available`, `Some services degraded`, `No Impact`, `Unknown`)\",       \"example\": \"Unknown\"     },     \"locations\" :{       \"type\": \"string\",       \"description\": \"Specifies the impact location of this event to a company’s operational geographies. These values can be configured via custom lists as these can be very specific to the company\",       \"example\": \"0.0,0.0\"     },   } } ``` ``` example {     ...,     eventFieldList: [{         \"name\": \"actionDate1\",         \"value\": \"11/09/2019 17:41:00\"       },       {         \"name\": \"actionOwner1\",         \"value\": \"John Wick\"       },       {           \"name\": \"actionDetails1\",         \"value\": \"investigation to take place asap.\"       },       {         \"name\": \"summary\",         \"value\": \"Outage of systems in Sydney\"       },       {         \"name\": \"status\",         \"value\": \"Open\"       },       {         \"name\": \"description\",         \"value\": \"ATMs are non responsive, teams to be sent to investigate.\"       },       {         \"name\": \"category\",         \"value\": \"Internal\"       },       {        \"name\": \"startDate\",        \"value\": \"11/09/2019 17:41:00\"       },       {        \"name\": \"severity\",        \"value\": \"Severity 3 - Minor Outage (Some Service Degradation)\"       },       ... and so on,   }] }                   ``` <!-- theme: info -->  > #### A thing to know > On top of the list of event attributes listed above, you may introduce other (alias) name and title fields <li> e.g (`otherFirstName`, `otherLastName`, `otherTitle`) </li>  <h2>Sending messages using event data</h2>  Once you’ve finished creating your event data in the Whispir platform, the next logical step is to deliver a notification about the event. This action can be performed using the existing `/messages` endpoint, with the `eventId` as an attribute of the message.  * Including this `eventId` links the message to the event, and allow you to use any attribute of the event within your message payload. * Any event fields populated on the event are automatically populated within the message. * Any attributes that are supplied within the message take priority over any attributes that are from the event. * The user should not be required to enter any `attributes` as these will be retrieved from the linked event. * The event fields automatically populate the attributes in the message body (based on the relationships set in the <b> Admin > Settings > Attributes > Message Event Attribute Map</b>).  <!-- theme: warning --> > #### Things to note > * If the `Event` doesn\'t contain an event field, and there is no relevant attribute field supplied > in the message payload, the `@@` tag will not be resolved. > * If you don\'t supply an attribute in the message payload, and this has also not been supplied from the event, the field simply will not be resolved within the message.
     * @summary Create an event
     * @param workspaceId The identifier for the workspace.
     * @param xApiKey The API key for authentication.
     * @param contentType Application specific mime-type.
     * @param accept Application specific mime-type.
     * @param event The Event object to create
     */
    async create(params, options) {
        const _a = params || {}, { workspaceId } = _a, event = __rest(_a, ["workspaceId"]);
        const localVarPath = this.host + '/workspaces/{workspaceId}/events'
            .replace('{' + 'workspaceId' + '}', encodeURIComponent(String(workspaceId)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        localVarHeaderParams['Content-Type'] = 'application/vnd.whispir.event-v1+json';
        localVarHeaderParams['Accept'] = 'application/vnd.whispir.event-v1+json';
        Object.assign(localVarHeaderParams, options === null || options === void 0 ? void 0 : options.headers);
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this.useQuerystring,
            json: true,
            body: models_1.ObjectSerializer.serialize(event, "Event")
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
                            body = models_1.ObjectSerializer.deserialize(body, "Event");
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
     * List event objects
     * @summary List events
     * @param workspaceId The identifier for the workspace.
     * @param xApiKey The API key for authentication.
     * @param accept Application specific mime-type.
     * @param eventType The name of the event template used
     * @param limit The number of records to be returned.
     * @param offset The record number to start returning from.
     * @param sortOrder The order in which you require the results to be returned. Either ‘asc’ or ‘desc’
     * @param sortFields The fields that you require the ordering to be performed on. Multiple fields can be provided, separated by a comma.
     */
    async list(params, options) {
        const { workspaceId, eventType, limit = 20, offset = 0, sortOrder, sortFields, } = params || {};
        const localVarPath = this.host + '/workspaces/{workspaceId}/events'
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
        localVarHeaderParams['Accept'] = 'application/vnd.whispir.event-v1+json';
        localVarHeaderParams['eventType'] = eventType || localVarHeaderParams['eventType'];
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
                            body = models_1.ObjectSerializer.deserialize(body, "EventCollection");
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
     * Retrieve an event object
     * @summary Retrieve an event
     * @param workspaceId The identifier for the workspace.
     * @param eventId The identifier for the event.
     * @param xApiKey The API key for authentication.
     * @param accept Application specific mime-type.
     * @param limit The number of records to be returned.
     * @param offset The record number to start returning from.
     * @param sortOrder The order in which you require the results to be returned. Either ‘asc’ or ‘desc’
     * @param sortFields The fields that you require the ordering to be performed on. Multiple fields can be provided, separated by a comma.
     */
    async retrieve(params, options) {
        const { workspaceId, eventId, limit = 20, offset = 0, sortOrder, sortFields, } = params || {};
        const localVarPath = this.host + '/workspaces/{workspaceId}/events/{eventId}'
            .replace('{' + 'workspaceId' + '}', encodeURIComponent(String(workspaceId)))
            .replace('{' + 'eventId' + '}', encodeURIComponent(String(eventId)));
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
        localVarHeaderParams['Accept'] = 'application/vnd.whispir.event-v1+json';
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
                            body = models_1.ObjectSerializer.deserialize(body, "Event");
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
     * Update an event object
     * @summary Update an event
     * @param workspaceId The identifier for the workspace.
     * @param eventId The identifier for the event.
     * @param xApiKey The API key for authentication.
     * @param contentType Application specific mime-type.
     * @param accept Application specific mime-type.
     * @param event The Event object to update
     */
    async update(params, options) {
        const _a = params || {}, { workspaceId, eventId } = _a, event = __rest(_a, ["workspaceId", "eventId"]);
        const localVarPath = this.host + '/workspaces/{workspaceId}/events/{eventId}'
            .replace('{' + 'workspaceId' + '}', encodeURIComponent(String(workspaceId)))
            .replace('{' + 'eventId' + '}', encodeURIComponent(String(eventId)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        let localVarFormParams = {};
        localVarHeaderParams['Content-Type'] = 'application/vnd.whispir.event-v1+json';
        localVarHeaderParams['Accept'] = 'application/vnd.whispir.event-v1+json';
        Object.assign(localVarHeaderParams, options === null || options === void 0 ? void 0 : options.headers);
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'PUT',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this.useQuerystring,
            json: true,
            body: models_1.ObjectSerializer.serialize(event, "Event")
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
exports.EventsApi = EventsApi;
