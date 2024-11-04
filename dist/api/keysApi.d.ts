import { Interceptor } from '../model/models';
import { ApiConfig } from './apis';
export declare class KeysApi {
    protected defaultHeaders: any;
    protected useQuerystring: boolean;
    protected interceptors: Interceptor[];
    protected host: string;
    constructor(config: ApiConfig);
    addInterceptor(interceptor: Interceptor): void;
}
