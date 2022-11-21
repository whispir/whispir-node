
import { RequestFile } from './models';
import { CallbackCall } from './callbackCall';
import { LinkInner } from './linkInner';

/**
* A list of callbacks
*/
export class GetCallbackCalls200Response {
    /**
    * A list of callbacks
    */
    'calls'?: Array<CallbackCall>;
    /**
    * Provides the total number of records fetched. This attribute may return \"No records found\" when there are no callbacks available.
    */
    'status'?: string;
    /**
    * A [HATEOAS](https://en.wikipedia.org/wiki/HATEOAS) link object, describing all discoverable resources in relation to the original request.
    */
    'link'?: Array<LinkInner>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "calls",
            "baseName": "calls",
            "type": "Array<CallbackCall>"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string"
        },
        {
            "name": "link",
            "baseName": "link",
            "type": "Array<LinkInner>"
        }    ];

    static getAttributeTypeMap() {
        return GetCallbackCalls200Response.attributeTypeMap;
    }
}

