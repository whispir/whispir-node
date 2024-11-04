"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./api/apis"), exports);
__exportStar(require("./model/models"), exports);
const version_1 = require("./version");
const activitiesApi_1 = require("./api/activitiesApi");
const authApi_1 = require("./api/authApi");
const callbacksApi_1 = require("./api/callbacksApi");
const contactsApi_1 = require("./api/contactsApi");
const customListsApi_1 = require("./api/customListsApi");
const distributionListsApi_1 = require("./api/distributionListsApi");
const eventsApi_1 = require("./api/eventsApi");
const importsApi_1 = require("./api/importsApi");
const keysApi_1 = require("./api/keysApi");
const messagesApi_1 = require("./api/messagesApi");
const resourcesApi_1 = require("./api/resourcesApi");
const responseRulesApi_1 = require("./api/responseRulesApi");
const scenariosApi_1 = require("./api/scenariosApi");
const templatesApi_1 = require("./api/templatesApi");
const usersApi_1 = require("./api/usersApi");
const workspacesApi_1 = require("./api/workspacesApi");
const Client = (config) => {
    let authHeaders = {};
    if (config.username && config.password && config.apiKey) {
        authHeaders['Authorization'] = `Basic ${Buffer.from(`${config.username}:${config.password}`).toString("base64")}`;
        authHeaders['X-Api-Key'] = config.apiKey;
    }
    else if (config.accessToken && config.apiKey) {
        authHeaders['Authorization'] = `Bearer ${config.accessToken}`;
        authHeaders['X-Api-Key'] = config.apiKey;
    }
    else {
        throw new Error(`Unsupported authorization:
        Please provide either username, password, and apiKey combination
        OR accessToken and apiKey combination.`);
    }
    const defaultHeaders = Object.assign({ 'User-Agent': `whispir-node-${version_1.VERSION}` }, authHeaders);
    const apiConfig = { defaultHeaders, host: config.host };
    const activities = new activitiesApi_1.ActivitiesApi(apiConfig);
    const auth = new authApi_1.AuthApi(apiConfig);
    const callbacks = new callbacksApi_1.CallbacksApi(apiConfig);
    const contacts = new contactsApi_1.ContactsApi(apiConfig);
    const customLists = new customListsApi_1.CustomListsApi(apiConfig);
    const distributionLists = new distributionListsApi_1.DistributionListsApi(apiConfig);
    const events = new eventsApi_1.EventsApi(apiConfig);
    const imports = new importsApi_1.ImportsApi(apiConfig);
    const keys = new keysApi_1.KeysApi(apiConfig);
    const messages = new messagesApi_1.MessagesApi(apiConfig);
    const resources = new resourcesApi_1.ResourcesApi(apiConfig);
    const responseRules = new responseRulesApi_1.ResponseRulesApi(apiConfig);
    const scenarios = new scenariosApi_1.ScenariosApi(apiConfig);
    const templates = new templatesApi_1.TemplatesApi(apiConfig);
    const users = new usersApi_1.UsersApi(apiConfig);
    const workspaces = new workspacesApi_1.WorkspacesApi(apiConfig);
    const apis = {
        activities,
        auth,
        callbacks,
        contacts,
        customLists,
        distributionLists,
        events,
        imports,
        keys,
        messages,
        resources,
        responseRules,
        scenarios,
        templates,
        users,
        workspaces,
    };
    const addInterceptor = (interceptor) => {
        Object.values(apis).forEach(api => {
            api.addInterceptor(interceptor);
        });
    };
    return Object.assign({ addInterceptor }, apis);
};
exports.default = Client;
module.exports = Client;
module.exports.default = Client;
