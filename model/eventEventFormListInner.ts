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
import { EventEventFormListInnerEventFieldListInner } from './eventEventFormListInnerEventFieldListInner';

/**
* Constitutes the name of the form and its fields
*/
export class EventEventFormListInner {
    /**
    * Specifies the name of the event form
    */
    'formName'?: string;
    /**
    * Contains a list of event fields, see create /POST event endpoint to learn more about the available fields
    */
    'eventFieldList'?: Array<EventEventFormListInnerEventFieldListInner>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "formName",
            "baseName": "formName",
            "type": "string"
        },
        {
            "name": "eventFieldList",
            "baseName": "eventFieldList",
            "type": "Array<EventEventFormListInnerEventFieldListInner>"
        }    ];

    static getAttributeTypeMap() {
        return EventEventFormListInner.attributeTypeMap;
    }
}

