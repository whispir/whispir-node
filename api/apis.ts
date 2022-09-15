export * from './activitiesApi';
import { ActivitiesApi } from './activitiesApi';
export * from './authApi';
import { AuthApi } from './authApi';
export * from './callbacksApi';
import { CallbacksApi } from './callbacksApi';
export * from './contactsApi';
import { ContactsApi } from './contactsApi';
export * from './customListsApi';
import { CustomListsApi } from './customListsApi';
export * from './distributionListsApi';
import { DistributionListsApi } from './distributionListsApi';
export * from './eventsApi';
import { EventsApi } from './eventsApi';
export * from './importsApi';
import { ImportsApi } from './importsApi';
export * from './messagesApi';
import { MessagesApi } from './messagesApi';
export * from './resourcesApi';
import { ResourcesApi } from './resourcesApi';
export * from './responseRulesApi';
import { ResponseRulesApi } from './responseRulesApi';
export * from './scenariosApi';
import { ScenariosApi } from './scenariosApi';
export * from './templatesApi';
import { TemplatesApi } from './templatesApi';
export * from './usersApi';
import { UsersApi } from './usersApi';
export * from './workspacesApi';
import { WorkspacesApi } from './workspacesApi';
import * as http from 'http';

export class HttpError extends Error {
    constructor (public response: http.IncomingMessage, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export { RequestFile } from '../model/models';

export const APIS = [ActivitiesApi, AuthApi, CallbacksApi, ContactsApi, CustomListsApi, DistributionListsApi, EventsApi, ImportsApi, MessagesApi, ResourcesApi, ResponseRulesApi, ScenariosApi, TemplatesApi, UsersApi, WorkspacesApi];
