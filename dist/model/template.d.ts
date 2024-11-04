import { DeliveryReceipt, DeliveryReceiptWrite } from './deliveryReceipt';
import { Email, EmailWrite } from './email';
import { Features, FeaturesWrite } from './features';
import { Link } from './link';
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
    'dlr'?: DeliveryReceiptWrite;
};
/**
* The template object.
*/
export declare class Template {
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
    'dlr': DeliveryReceipt;
    /**
    * A [HATEOAS](https://en.wikipedia.org/wiki/HATEOAS) link array, describing all discoverable resources in relation to the original request.
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
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
