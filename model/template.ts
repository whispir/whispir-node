
import { RequestFile } from './models';
import { Link, LinkWrite } from './link';
import { MessageDlr, MessageDlrWrite } from './messageDlr';
import { MessageEmail, MessageEmailWrite } from './messageEmail';
import { MessageFeatures, MessageFeaturesWrite } from './messageFeatures';
import { MessageSocial, MessageSocialWrite } from './messageSocial';
import { MessageVoice, MessageVoiceWrite } from './messageVoice';
import { MessageWeb, MessageWebWrite } from './messageWeb';


export type TemplateWrite = {
    /**
    * Specifies the description of the message template for others to understand its purpose.
    */
    'messageTemplateDescription'?: string;
    /**
    * Specifies the ID of the Response Rule that should be associated with this Message Template.
    */
    'responseTemplateId'?: string;
    /**
    * Specifies the first line of the SMS message or Voice call, and the subject of the Email message.
    */
    'subject': string;
    /**
    * Specifies the content of the SMS message.
    */
    'body': string;
    'email'?: MessageEmailWrite;
    'voice'?: MessageVoiceWrite;
    'web'?: MessageWebWrite;
    'social'?: MessageSocialWrite;
    /**
    * Allows the user to modify the message behaviour for replies and DLRs (delivery receipts)
    */
    'type'?: string;
    'features'?: MessageFeaturesWrite;
    'dlr'?: MessageDlrWrite;
}

/**
* The template object.
*/
export class Template {
    /**
    * Specifies the name of the message template to be used within message requests.
    */
    'messageTemplateName': string;
    /**
    * Specifies the description of the message template for others to understand its purpose.
    */
    'messageTemplateDescription': string;
    /**
    * Specifies the ID of the Response Rule that should be associated with this Message Template.
    */
    'responseTemplateId': string;
    /**
    * Specifies the first line of the SMS message or Voice call, and the subject of the Email message.
    */
    'subject': string;
    /**
    * Specifies the content of the SMS message.
    */
    'body': string;
    'email': MessageEmail;
    'voice': MessageVoice;
    'web': MessageWeb;
    'social': MessageSocial;
    /**
    * Allows the user to modify the message behaviour for replies and DLRs (delivery receipts)
    */
    'type': string;
    'features': MessageFeatures;
    'dlr': MessageDlr;
    /**
    * A [HATEOAS](https://en.wikipedia.org/wiki/HATEOAS) link object, describing all discoverable resources in relation to the original request.
    */
    'link': Array<Link>;
    /**
    * Information which helps to label related message templates together
    */
    'tags': string;
    /**
    * specifies the id of the message template
    */
    'id': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "messageTemplateName",
            "baseName": "messageTemplateName",
            "type": "string"
        },
        {
            "name": "messageTemplateDescription",
            "baseName": "messageTemplateDescription",
            "type": "string"
        },
        {
            "name": "responseTemplateId",
            "baseName": "responseTemplateId",
            "type": "string"
        },
        {
            "name": "subject",
            "baseName": "subject",
            "type": "string"
        },
        {
            "name": "body",
            "baseName": "body",
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
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        },
        {
            "name": "features",
            "baseName": "features",
            "type": "MessageFeatures"
        },
        {
            "name": "dlr",
            "baseName": "dlr",
            "type": "MessageDlr"
        },
        {
            "name": "link",
            "baseName": "link",
            "type": "Array<Link>"
        },
        {
            "name": "tags",
            "baseName": "tags",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return Template.attributeTypeMap;
    }
}

