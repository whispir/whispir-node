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
import { Attachment } from './attachment';

/**
* The resources to attach to the email Message.
*/
export class EmailResources {
    /**
    * A list of attachments to attach to the email Message.
    */
    'attachments'?: Array<Attachment>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "attachments",
            "baseName": "attachments",
            "type": "Array<Attachment>"
        }    ];

    static getAttributeTypeMap() {
        return EmailResources.attributeTypeMap;
    }
}

