/**
 * Whispir Platform API
 * Whispir Platform API for cross channel and multi channel communications. Documentation on each endpoint is available at https://developers.whispir.com.
 *
 * The version of the OpenAPI document: 1.0.3
 * Contact: support@whispir.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

/**
* The object defining options for message sender aliasing.
*/
export class FeaturesAliasOption {
    /**
    * The name of the alias configured to modify the message sender.
    */
    'aliasName'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "aliasName",
            "baseName": "aliasName",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return FeaturesAliasOption.attributeTypeMap;
    }
}

