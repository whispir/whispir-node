
import { RequestFile } from './models';
import { Dlr, DlrWrite } from './dlr';
import { Email, EmailWrite } from './email';
import { Features, FeaturesWrite } from './features';
import { LinkInner, LinkInnerWrite } from './linkInner';
import { Social, SocialWrite } from './social';
import { Voice, VoiceWrite } from './voice';
import { Web, WebWrite } from './web';


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
    'email'?: EmailWrite;
    'voice'?: VoiceWrite;
    'web'?: WebWrite;
    'social'?: SocialWrite;
    /**
    * Allows the user to modify the message behaviour for replies and DLRs (delivery receipts)
    */
    'type'?: string;
    'features'?: FeaturesWrite;
    'dlr'?: DlrWrite;
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
    'email': Email;
    'voice': Voice;
    'web': Web;
    'social': Social;
    /**
    * Allows the user to modify the message behaviour for replies and DLRs (delivery receipts)
    */
    'type': string;
    'features': Features;
    'dlr': Dlr;
    /**
    * A [HATEOAS](https://en.wikipedia.org/wiki/HATEOAS) link object, describing all discoverable resources in relation to the original request.
    */
    'link': Array<LinkInner>;
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
            "type": "Email"
        },
        {
            "name": "voice",
            "baseName": "voice",
            "type": "Voice"
        },
        {
            "name": "web",
            "baseName": "web",
            "type": "Web"
        },
        {
            "name": "social",
            "baseName": "social",
            "type": "Social"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        },
        {
            "name": "features",
            "baseName": "features",
            "type": "Features"
        },
        {
            "name": "dlr",
            "baseName": "dlr",
            "type": "Dlr"
        },
        {
            "name": "link",
            "baseName": "link",
            "type": "Array<LinkInner>"
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

