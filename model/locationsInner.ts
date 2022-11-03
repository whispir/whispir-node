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
* The location object.
*/
export class LocationsInner {
    /**
    * The measurement of distance north or south of the Equator, for the contact.
    */
    'latitude'?: number;
    /**
    * The measurement of distance east or west of the prime meridian, for the contact.
    */
    'longitude'?: number;
    /**
    * A description for the location. At least one element of the `locations` array must have a `type` equal to `CurrentLocation`.
    */
    'type'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "latitude",
            "baseName": "latitude",
            "type": "number"
        },
        {
            "name": "longitude",
            "baseName": "longitude",
            "type": "number"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return LocationsInner.attributeTypeMap;
    }
}

