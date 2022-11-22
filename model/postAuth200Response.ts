
import { RequestFile } from './models';
import { LinkInner, LinkInnerWrite } from './linkInner';


export type PostAuth200ResponseWrite = {
    /**
    * The JWT token.
    */
    'token'?: string;
}

/**
* The create auth response object.
*/
export class PostAuth200Response {
    /**
    * The JWT token.
    */
    'token': string;
    /**
    * A [HATEOAS](https://en.wikipedia.org/wiki/HATEOAS) link object, describing all discoverable resources in relation to the original request.
    */
    'link': Array<LinkInner>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "token",
            "baseName": "token",
            "type": "string"
        },
        {
            "name": "link",
            "baseName": "link",
            "type": "Array<LinkInner>"
        }    ];

    static getAttributeTypeMap() {
        return PostAuth200Response.attributeTypeMap;
    }
}

