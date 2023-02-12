import localVarRequest from 'request';

/* tslint:disable:no-unused-locals */
import { ApiError, ApiErrorWrite } from '../model/apiError';
import { Key, KeyWrite } from '../model/key';
import { KeyCollection, KeyCollectionWrite } from '../model/keyCollection';
import { ObjectSerializer, Interceptor } from '../model/models';
import { HttpError, RequestFile, ApiResponse, CreateResponse, ApiConfig, RequestOptions } from './apis';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================


export class KeysApi {
    protected defaultHeaders: any = {};
    protected useQuerystring: boolean = false;
    protected interceptors: Interceptor[] = [];
    protected host: string;

    constructor(config: ApiConfig) {
        this.defaultHeaders = config.defaultHeaders;
        this.host = config.host;
    }

    public addInterceptor(interceptor: Interceptor) {
        this.interceptors.push(interceptor);
    }

}