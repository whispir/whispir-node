export * from './activitiesApi';
export * from './authApi';
export * from './callbacksApi';
export * from './contactsApi';
export * from './customListsApi';
export * from './distributionListsApi';
export * from './eventsApi';
export * from './importsApi';
export * from './messagesApi';
export * from './resourcesApi';
export * from './responseRulesApi';
export * from './scenariosApi';
export * from './templatesApi';
export * from './usersApi';
export * from './workspacesApi';
import * as http from 'http';

export class HttpError extends Error {
    constructor(public body: any, public statusCode?: number) {
        super(body.errorText);
        this.name = 'HttpError';
    }
};

export type ApiConfig = {
    defaultHeaders: { [name: string]: string };
    host: string;
};

export type RequestOptions = {
    headers: { [name: string]: string };
};

export { RequestFile } from '../model/models';
