/**
 * Whispir Platform API
 * Whispir Platform API for cross channel and multi channel communications. Documentation on each endpoint is available at https://developers.whispir.com.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: support@whispir.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { FeaturesPushOptionsApns } from './featuresPushOptionsApns';
import { FeaturesPushOptionsFcm } from './featuresPushOptionsFcm';

/**
* The object defining options for push messages.
*/
export class FeaturesPushOptions {
    /**
    * A flag indicating whether notifications should be enabled for message replies.
    */
    'notifications'?: FeaturesPushOptions.NotificationsEnum;
    /**
    * The number of minutes to wait for a reply until escalating to the next contact.
    */
    'escalationMins'?: string;
    /**
    * The identifier for the registered application.
    */
    'appId': string;
    /**
    * The priority of the notification.   NORMAL (the default value) will indicate to FCM/APNS to take into consideration the target device\'s battery consumption at the expense of delivering the message with a delay.   The value NORMAL maps to priority *NORMAL* in FCM and priority *5* in APNS.   The value HIGH maps to priority *HIGH* in FCM and *10* in APNS.
    */
    'priority'?: FeaturesPushOptions.PriorityEnum = FeaturesPushOptions.PriorityEnum.Normal;
    'fcm'?: FeaturesPushOptionsFcm;
    'apns'?: FeaturesPushOptionsApns;
    /**
    * Custom key-value pairs of the notification\'s payload. These values can be used by the target app for enhanced functionality provided that it has been designed to handle them (images, videos, links etc).  These attributes translate to <span style=\"color:red\">*data*</span>  in the FCM payload.  For APNS, the custom attributes of *data* are inserted as custom properties outside of the <span style=\"color:red\">*aps*</span> payload.
    */
    'data'?: object;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "notifications",
            "baseName": "notifications",
            "type": "FeaturesPushOptions.NotificationsEnum"
        },
        {
            "name": "escalationMins",
            "baseName": "escalationMins",
            "type": "string"
        },
        {
            "name": "appId",
            "baseName": "appId",
            "type": "string"
        },
        {
            "name": "priority",
            "baseName": "priority",
            "type": "FeaturesPushOptions.PriorityEnum"
        },
        {
            "name": "fcm",
            "baseName": "fcm",
            "type": "FeaturesPushOptionsFcm"
        },
        {
            "name": "apns",
            "baseName": "apns",
            "type": "FeaturesPushOptionsApns"
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "object"
        }    ];

    static getAttributeTypeMap() {
        return FeaturesPushOptions.attributeTypeMap;
    }
}

export namespace FeaturesPushOptions {
    export enum NotificationsEnum {
        Enabled = <any> 'enabled',
        Disabled = <any> 'disabled'
    }
    export enum PriorityEnum {
        Normal = <any> 'NORMAL',
        High = <any> 'HIGH'
    }
}