
import { RequestFile } from './models';

/**
* The object to configure message channel options.
*/
export class MessagingoptionsInner {
    /**
    * The message channel.
    */
    'channel'?: 'sms' | 'email' | 'voice';
    /**
    * A boolean flag indicating whether messaging is enabled for the `channel`.
    */
    'enabled'?: boolean;
    /**
    * The primary contact address for the `channel`.
    */
    'primary'?: 'WorkMobilePhone1' | 'WorkMobilePhone2' | 'WorkEmailAddress1' | 'WorkEmailAddress2' | 'PersonalMobilePhone1' | 'PersonalEmailAddress1';
    /**
    * The secondary contact address for the `channel`.
    */
    'secondary'?: 'WorkMobilePhone1' | 'WorkMobilePhone2' | 'WorkEmailAddress1' | 'WorkEmailAddress2' | 'PersonalMobilePhone1' | 'PersonalEmailAddress1';
    /**
    * The tertiary contact address for the `channel`.
    */
    'tertiary'?: 'WorkMobilePhone1' | 'WorkMobilePhone2' | 'WorkEmailAddress1' | 'WorkEmailAddress2' | 'PersonalMobilePhone1' | 'PersonalEmailAddress1';

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "channel",
            "baseName": "channel",
            "type": "string"
        },
        {
            "name": "enabled",
            "baseName": "enabled",
            "type": "boolean"
        },
        {
            "name": "primary",
            "baseName": "primary",
            "type": "string"
        },
        {
            "name": "secondary",
            "baseName": "secondary",
            "type": "string"
        },
        {
            "name": "tertiary",
            "baseName": "tertiary",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return MessagingoptionsInner.attributeTypeMap;
    }
}

