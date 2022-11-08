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
import { LinkInner } from './linkInner';
import { MessageResponseDetailed } from './messageResponseDetailed';
import { MessageResponseSummary } from './messageResponseSummary';
import { MessageResponseSummaryMessageresponsesInner } from './messageResponseSummaryMessageresponsesInner';

/**
* The message response object.
*/
export class GetMessageResponsesById200Response {
    /**
    * The message response statuses.
    */
    'messageresponses': Set<MessageResponseSummaryMessageresponsesInner>;
    /**
    * A [HATEOAS](https://en.wikipedia.org/wiki/HATEOAS) link object, describing all discoverable resources in relation to the original request.
    */
    'link': Array<LinkInner>;
    /**
    * The message response pagination status.
    */
    'status'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "messageresponses",
            "baseName": "messageresponses",
            "type": "Set<MessageResponseSummaryMessageresponsesInner>"
        },
        {
            "name": "link",
            "baseName": "link",
            "type": "Array<LinkInner>"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return GetMessageResponsesById200Response.attributeTypeMap;
    }
}

