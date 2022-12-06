
import { RequestFile } from './models';
import { MessageSocialChannel, MessageSocialChannelWrite } from './messageSocialChannel';


export type MessageSocialWrite = {
    /**
    * The list of social channel content.
    */
    'social'?: Array<MessageSocialChannelWrite>;
}

/**
* Whispir can publish content to your Twitter and Facebook walls. Other socials can be made available upon request.
*/
export class MessageSocial {
    /**
    * The list of social channel content.
    */
    'social': Array<MessageSocialChannel>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "social",
            "baseName": "social",
            "type": "Array<MessageSocialChannel>"
        }    ];

    static getAttributeTypeMap() {
        return MessageSocial.attributeTypeMap;
    }
}

