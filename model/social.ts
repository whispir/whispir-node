
import { RequestFile } from './models';
import { Channel, ChannelWrite } from './channel';


export type SocialWrite = {
    /**
    * The list of social channel content.
    */
    'social'?: Array<ChannelWrite>;
}

/**
* Whispir can publish content to your Twitter and Facebook walls. Other socials can be made available upon request.
*/
export class Social {
    /**
    * The list of social channel content.
    */
    'social': Array<Channel>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "social",
            "baseName": "social",
            "type": "Array<Channel>"
        }    ];

    static getAttributeTypeMap() {
        return Social.attributeTypeMap;
    }
}

