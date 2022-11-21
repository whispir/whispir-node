
import { RequestFile } from './models';

/**
* The social channel object.
*/
export class SocialSocialInner {
    /**
    * The identifier for the social content channel. Read the following section for information on each channel.  | Channel        | id | | -------------- |--------------- | | Twitter        | `\"social\"` | | Facebook       | `\"social_long\"` |
    */
    'id'?: 'social' | 'social_long';
    /**
    * The social content body.
    */
    'body'?: string;
    /**
    * The social message content type.
    */
    'type'?: 'text/plain' | 'text/html';

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "body",
            "baseName": "body",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return SocialSocialInner.attributeTypeMap;
    }
}

