
import { RequestFile } from './models';
import { SocialSocialInner } from './socialSocialInner';

/**
* Whispir can publish content to your Twitter and Facebook walls. Other socials can be made available upon request.
*/
export class Social {
    /**
    * The list of social channel content.
    */
    'social'?: Array<SocialSocialInner>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "social",
            "baseName": "social",
            "type": "Array<SocialSocialInner>"
        }    ];

    static getAttributeTypeMap() {
        return Social.attributeTypeMap;
    }
}

