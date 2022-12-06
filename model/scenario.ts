
import { RequestFile } from './models';
import { Message, MessageWrite } from './message';
import { MessageEmail, MessageEmailWrite } from './messageEmail';
import { MessageSocial, MessageSocialWrite } from './messageSocial';
import { MessageVoice, MessageVoiceWrite } from './messageVoice';
import { MessageWeb, MessageWebWrite } from './messageWeb';


export type ScenarioWrite = {
    /**
    * Specifies the name of the scenario
    */
    'name': string;
    /**
    * Specifies the description of the scenario
    */
    'description': string;
    /**
    * Specifies the usage permission - 1)EVERYONE 2)SELECTEDUSERS When SELECTEDUSERS is provided, then `allowedUserIds` shall contain the userID of the allowed users.
    */
    'allowedUsers'?: 'EVERYONE' | 'SELECTEDUSERS';
    /**
    * Specifies the comma separated list of users who can run this scenario.Only contains value when the allowedUsers is set to `SELECTEDUSERS`
    */
    'allowedUserIds'?: string;
    'message': MessageWrite;
    /**
    * Specifies the phone number or MRI or distribution list to which the message has to be sent
    */
    'to'?: string;
    /**
    * Specifies the subject of the message
    */
    'subject'?: string;
    /**
    * Specifies the label for the message (to view during reporting)
    */
    'label'?: string;
    'email'?: MessageEmailWrite;
    'voice'?: MessageVoiceWrite;
    'web'?: MessageWebWrite;
    'social'?: MessageSocialWrite;
}

/**
* Scenarios allows you to simplify the message delivery process through automated, one-click communications.
*/
export class Scenario {
    /**
    * Specifies the name of the scenario
    */
    'name': string;
    /**
    * Specifies the description of the scenario
    */
    'description': string;
    /**
    * Specifies the usage permission - 1)EVERYONE 2)SELECTEDUSERS When SELECTEDUSERS is provided, then `allowedUserIds` shall contain the userID of the allowed users.
    */
    'allowedUsers': 'EVERYONE' | 'SELECTEDUSERS';
    /**
    * Specifies the comma separated list of users who can run this scenario.Only contains value when the allowedUsers is set to `SELECTEDUSERS`
    */
    'allowedUserIds': string;
    'message': Message;
    /**
    * Specifies the phone number or MRI or distribution list to which the message has to be sent
    */
    'to': string;
    /**
    * Specifies the subject of the message
    */
    'subject': string;
    /**
    * Specifies the label for the message (to view during reporting)
    */
    'label': string;
    'email': MessageEmail;
    'voice': MessageVoice;
    'web': MessageWeb;
    'social': MessageSocial;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "allowedUsers",
            "baseName": "allowedUsers",
            "type": "string"
        },
        {
            "name": "allowedUserIds",
            "baseName": "allowedUserIds",
            "type": "string"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "Message"
        },
        {
            "name": "to",
            "baseName": "to",
            "type": "string"
        },
        {
            "name": "subject",
            "baseName": "subject",
            "type": "string"
        },
        {
            "name": "label",
            "baseName": "label",
            "type": "string"
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "MessageEmail"
        },
        {
            "name": "voice",
            "baseName": "voice",
            "type": "MessageVoice"
        },
        {
            "name": "web",
            "baseName": "web",
            "type": "MessageWeb"
        },
        {
            "name": "social",
            "baseName": "social",
            "type": "MessageSocial"
        }    ];

    static getAttributeTypeMap() {
        return Scenario.attributeTypeMap;
    }
}

