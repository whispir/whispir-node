
import { RequestFile } from './models';
import { GetCallbacks200ResponseCallbacksInner, GetCallbacks200ResponseCallbacksInnerWrite } from './getCallbacks200ResponseCallbacksInner';
import { LinkInner, LinkInnerWrite } from './linkInner';


export type GetCallbacks200ResponseWrite = {
}

/**
* The callback object.
*/
export class GetCallbacks200Response {
    /**
    * Provides the total number of records fetched. This attribute may return \"No records found\" when there are no callbacks available.
    */
    'status': string;
    /**
    * A list of callbacks
    */
    'callbacks': Set<GetCallbacks200ResponseCallbacksInner>;
    /**
    * A [HATEOAS](https://en.wikipedia.org/wiki/HATEOAS) link object, describing all discoverable resources in relation to the original request.
    */
    'link': Array<LinkInner>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "status",
            "baseName": "status",
            "type": "string"
        },
        {
            "name": "callbacks",
            "baseName": "callbacks",
            "type": "Set<GetCallbacks200ResponseCallbacksInner>"
        },
        {
            "name": "link",
            "baseName": "link",
            "type": "Array<LinkInner>"
        }    ];

    static getAttributeTypeMap() {
        return GetCallbacks200Response.attributeTypeMap;
    }
}

