import { Link } from './link';
export type AuthWrite = {
    /**
    * The JWT token.
    */
    'token'?: string;
};
/**
* The create auth object.
*/
export declare class Auth {
    /**
    * The JWT token.
    */
    'token': string;
    /**
    * A [HATEOAS](https://en.wikipedia.org/wiki/HATEOAS) link array, describing all discoverable resources in relation to the original request.
    */
    'link': Array<Link>;
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
