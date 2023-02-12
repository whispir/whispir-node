
import { RequestFile } from './models';
import { Link, LinkWrite } from './link';


export type AuthWrite = {
    /**
    * The JWT token.
    */
    'token'?: string;
}

/**
* The create auth object.
*/
export class Auth {
    /**
    * The JWT token.
    */
    'token': string;
    /**
    * A [HATEOAS](https://en.wikipedia.org/wiki/HATEOAS) link array, describing all discoverable resources in relation to the original request.
    */
    'link': Array<Link>;

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
            "type": "Array<Link>"
        }    ];

    static getAttributeTypeMap() {
        return Auth.attributeTypeMap;
    }
}

