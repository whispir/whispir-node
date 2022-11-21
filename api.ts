export * from './api/apis';
export * from './model/models';
import { Interceptor } from './model/models';
import { VERSION } from './version';
import { ActivitiesApi } from './api/activitiesApi';
import { AuthApi } from './api/authApi';
import { CallbacksApi } from './api/callbacksApi';
import { ContactsApi } from './api/contactsApi';
import { CustomListsApi } from './api/customListsApi';
import { DistributionListsApi } from './api/distributionListsApi';
import { EventsApi } from './api/eventsApi';
import { ImportsApi } from './api/importsApi';
import { MessagesApi } from './api/messagesApi';
import { ResourcesApi } from './api/resourcesApi';
import { ResponseRulesApi } from './api/responseRulesApi';
import { ScenariosApi } from './api/scenariosApi';
import { TemplatesApi } from './api/templatesApi';
import { UsersApi } from './api/usersApi';
import { WorkspacesApi } from './api/workspacesApi';

export type ClientConfig = {
    host: string;
    username?: string;
    password?: string;
    apiKey?: string;
    accessToken?: string;
};

type AuthHeaders = {
    'X-Api-Key'?: string;
    Authorization?: string;
};

const Client = (config: ClientConfig) => {
    let authHeaders: AuthHeaders = {};

    if (config.username && config.password && config.apiKey) {
        authHeaders['Authorization'] = `Basic ${Buffer.from(`${config.username}:${config.password}`).toString("base64")}`;
        authHeaders['X-Api-Key'] = config.apiKey;
    } else if (config.accessToken && config.apiKey) {
        authHeaders['Authorization'] = `Bearer ${config.accessToken}`;
        authHeaders['X-Api-Key'] = config.apiKey;
    } else {
        throw new Error(`Unsupported authorization:
        Please provide either username, password, and apiKey combination
        OR accessToken and apiKey combination.`);
    }

    const defaultHeaders = {
        'User-Agent': `whispir-node-${VERSION}`,
        ...authHeaders,
    };

    const apiConfig = { defaultHeaders, host: config.host };

    const activities = new ActivitiesApi(apiConfig);
    const auth = new AuthApi(apiConfig);
    const callbacks = new CallbacksApi(apiConfig);
    const contacts = new ContactsApi(apiConfig);
    const customLists = new CustomListsApi(apiConfig);
    const distributionLists = new DistributionListsApi(apiConfig);
    const events = new EventsApi(apiConfig);
    const imports = new ImportsApi(apiConfig);
    const messages = new MessagesApi(apiConfig);
    const resources = new ResourcesApi(apiConfig);
    const responseRules = new ResponseRulesApi(apiConfig);
    const scenarios = new ScenariosApi(apiConfig);
    const templates = new TemplatesApi(apiConfig);
    const users = new UsersApi(apiConfig);
    const workspaces = new WorkspacesApi(apiConfig);

    const apis = { 
        activities,
        auth,
        callbacks,
        contacts,
        customLists,
        distributionLists,
        events,
        imports,
        messages,
        resources,
        responseRules,
        scenarios,
        templates,
        users,
        workspaces,
    };

    const addInterceptor = (interceptor: Interceptor) => {
        Object.values(apis).forEach(api => {
            api.addInterceptor(interceptor);
        });
    };

    return { addInterceptor, ...apis };
};

export default Client;
module.exports = Client;
module.exports.default = Client;
