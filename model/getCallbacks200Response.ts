/**
 * Whispir Platform API
 * Whispir Platform API for cross channel and multi channel communications. Documentation on each endpoint is available at https://developers.whispir.com.
 *
 * The version of the OpenAPI document: 1.0.4
 * Contact: support@whispir.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { GetCallbacks200ResponseCallbacksInner } from './getCallbacks200ResponseCallbacksInner';
import { LinkInner } from './linkInner';

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

