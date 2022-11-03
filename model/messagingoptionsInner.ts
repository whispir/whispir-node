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
* The object to configure message channel options.
*/
export class MessagingoptionsInner {
    /**
    * The message channel.
    */
    'channel'?: MessagingoptionsInner.ChannelEnum;
    /**
    * A boolean flag indicating whether messaging is enabled for the `channel`.
    */
    'enabled'?: boolean;
    /**
    * The primary contact address for the `channel`.
    */
    'primary'?: MessagingoptionsInner.PrimaryEnum;
    /**
    * The secondary contact address for the `channel`.
    */
    'secondary'?: MessagingoptionsInner.SecondaryEnum;
    /**
    * The tertiary contact address for the `channel`.
    */
    'tertiary'?: MessagingoptionsInner.TertiaryEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "channel",
            "baseName": "channel",
            "type": "MessagingoptionsInner.ChannelEnum"
        },
        {
            "name": "enabled",
            "baseName": "enabled",
            "type": "boolean"
        },
        {
            "name": "primary",
            "baseName": "primary",
            "type": "MessagingoptionsInner.PrimaryEnum"
        },
        {
            "name": "secondary",
            "baseName": "secondary",
            "type": "MessagingoptionsInner.SecondaryEnum"
        },
        {
            "name": "tertiary",
            "baseName": "tertiary",
            "type": "MessagingoptionsInner.TertiaryEnum"
        }    ];

    static getAttributeTypeMap() {
        return MessagingoptionsInner.attributeTypeMap;
    }
}

export namespace MessagingoptionsInner {
    export enum ChannelEnum {
        Sms = <any> 'sms',
        Email = <any> 'email',
        Voice = <any> 'voice'
    }
    export enum PrimaryEnum {
        WorkMobilePhone1 = <any> 'WorkMobilePhone1',
        WorkMobilePhone2 = <any> 'WorkMobilePhone2',
        WorkEmailAddress1 = <any> 'WorkEmailAddress1',
        WorkEmailAddress2 = <any> 'WorkEmailAddress2',
        PersonalMobilePhone1 = <any> 'PersonalMobilePhone1',
        PersonalEmailAddress1 = <any> 'PersonalEmailAddress1'
    }
    export enum SecondaryEnum {
        WorkMobilePhone1 = <any> 'WorkMobilePhone1',
        WorkMobilePhone2 = <any> 'WorkMobilePhone2',
        WorkEmailAddress1 = <any> 'WorkEmailAddress1',
        WorkEmailAddress2 = <any> 'WorkEmailAddress2',
        PersonalMobilePhone1 = <any> 'PersonalMobilePhone1',
        PersonalEmailAddress1 = <any> 'PersonalEmailAddress1'
    }
    export enum TertiaryEnum {
        WorkMobilePhone1 = <any> 'WorkMobilePhone1',
        WorkMobilePhone2 = <any> 'WorkMobilePhone2',
        WorkEmailAddress1 = <any> 'WorkEmailAddress1',
        WorkEmailAddress2 = <any> 'WorkEmailAddress2',
        PersonalMobilePhone1 = <any> 'PersonalMobilePhone1',
        PersonalEmailAddress1 = <any> 'PersonalEmailAddress1'
    }
}
